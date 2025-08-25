
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import TravelDashboard from "./TravelDashboard";
import Login from "./Login";
import Register from "./Register";
import Budget from "./Budget";
import Packing from "./packing";
import Booking from "./booking";
import Destinations from "./Destinations";
import Setting from "./setting";
import Trip from "./trip";
import FlightSearch from "./FlightSearch";
import FrontPage from "./FrontPage";
import AdminDashboard from "./AdminDashboard";
import TotalUsers from "./TotalUsers";
import Bookings from "./Bookings";
import Reports from "./Reports";
import Settings from "./Settingg";
import MyBooking from "./MyBooking";
import BookingTicket from "./BookingTicket";

// Layout with Sidebar (responsive)
function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 bg-gray-900 text-white">
        {/* <Sidebar /> */}
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-900 text-white z-40 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
        ></div>
      )}

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 text-white rounded-lg shadow-md"
      >
        ☰
      </button>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 bg-gray-100 overflow-auto">{children}</div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root */}
        <Route path="/" element={<Navigate to="/frontpage" />} />

        {/* Public pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/frontpage" element={<FrontPage />} />

        {/* Protected pages with Sidebar Layout */}
        <Route path="/dashboard" element={<Layout><TravelDashboard /></Layout>} />
        <Route path="/budget" element={<Layout><Budget /></Layout>} />
        <Route path="/packing" element={<Layout><Packing /></Layout>} />
        <Route path="/book" element={<Layout><Booking /></Layout>} />
        <Route path="/destinations" element={<Layout><Destinations /></Layout>} />
        <Route path="/setting" element={<Layout><Setting /></Layout>} />
        <Route path="/trip" element={<Layout><Trip /></Layout>} />
        <Route path="/flightsearch" element={<Layout><FlightSearch /></Layout>} />
        <Route path="/admindashboard" element={<Layout><AdminDashboard /></Layout>} />
        <Route path="/TotalUsers" element={<Layout><TotalUsers /></Layout>} />
        <Route path="/Bookings" element={<Layout><Bookings /></Layout>} />
        <Route path="/Reports" element={<Layout><Reports /></Layout>} />
        <Route path="/settingg" element={<Layout><Settings /></Layout>} />
        <Route path="/BookingTicket" element={<Layout><BookingTicket /></Layout>} />
        <Route path="/MyBooking" element={<Layout><MyBooking /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;






