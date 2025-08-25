
// AdminDashboard.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaSuitcase,
  FaDollarSign,
  FaMapMarkerAlt,
  FaChartLine,
  FaBell,
} from "react-icons/fa";
import Side from "./Side"; // ✅ Import Sidebar
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [notifications, setNotifications] = useState(3);
  const [searchValue, setSearchValue] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);

  const stats = [
    { title: "Total Users", value: 100, icon: <FaUsers />, color: "#4cafef" },
    { title: "Trips Booked", value: 13, icon: <FaSuitcase />, color: "#ff9800" },
    { title: "Revenue", value: "$85,450", icon: <FaDollarSign />, color: "#4caf50" },
    { title: "Active Destinations", value: 5, icon: <FaMapMarkerAlt />, color: "#9c27b0" },
    { title: "Monthly Growth", value: "+12%", icon: <FaChartLine />, color: "#f44336" },
  ];

  const recentBookings = [
    { id: 1, user: "John Doe", destination: "Paris, France", date: "Aug 12 - Aug 20", status: "Confirmed" },
    { id: 2, user: "Emma Smith", destination: "Tokyo, Japan", date: "Sep 5 - Sep 12", status: "Pending" },
    { id: 3, user: "Raj Kumar", destination: "Bali, Indonesia", date: "Oct 1 - Oct 8", status: "Cancelled" },
  ];

  const handleSearch = (e) => setSearchValue(e.target.value);

  const handleNotificationClick = () => {
    alert("You have " + notifications + " new notifications!");
    setNotifications(0);
  };

  const handleBookingClick = (booking) => setSelectedBooking(booking);

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <Side />

      {/* MAIN CONTENT */}
      <div className="admin-main">
        {/* TOP NAVBAR */}
        <header className="admin-navbar">
          <input
            type="text"
            placeholder="Search bookings..."
            className="search-bar"
            value={searchValue}
            onChange={handleSearch}
          />
          <div className="navbar-right">
            <div className="notification-icon" onClick={handleNotificationClick}>
              <FaBell />
              {notifications > 0 && <span className="badge">{notifications}</span>}
            </div>
            <div className="profile-menu">
              <div className="avatar">A</div>
              <span>Admin</span>
            </div>
          </div>
        </header>

        {/* STATS */}
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-card" key={i} style={{ background: s.color }}>
              <div className="stat-icon">{s.icon}</div>
              <div>
                <h3>{s.value}</h3>
                <p>{s.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RECENT BOOKINGS */}
        <div className="section">
          <div className="section-header">
            <h2>Recent Bookings</h2>
            <Link to="/bookings">View All</Link>
          </div>
          <table className="bookings-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Destination</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings
                .filter(
                  (b) =>
                    b.user.toLowerCase().includes(searchValue.toLowerCase()) ||
                    b.destination.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((b) => (
                  <tr key={b.id} onClick={() => handleBookingClick(b)}>
                    <td>{b.user}</td>
                    <td>{b.destination}</td>
                    <td>{b.date}</td>
                    <td>
                      <span className={`status ${b.status.toLowerCase()}`}>
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* MODAL */}
        {selectedBooking && (
          <div className="modal-overlay" onClick={() => setSelectedBooking(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>Booking Details</h3>
              <p>
                <strong>User:</strong> {selectedBooking.user}
              </p>
              <p>
                <strong>Destination:</strong> {selectedBooking.destination}
              </p>
              <p>
                <strong>Date:</strong> {selectedBooking.date}
              </p>
              <p>
                <strong>Status:</strong> {selectedBooking.status}
              </p>
              <button onClick={() => setSelectedBooking(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
