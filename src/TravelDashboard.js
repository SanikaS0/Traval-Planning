import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './TravelDashboard.css';
import Trip from './trip';

const TravelDashboard = () => {
  const [showCookieNotice, setShowCookieNotice] = useState(true);
  
  // Sample data for upcoming trips
  const upcomingTrips = [
    { id: 1, destination: 'Bali, Indonesia', date: 'Jun 12-20, 2023', daysLeft: 15, image: '/bali.jpeg' },
    { id: 2, destination: 'Paris, France', date: 'Jul 5-15, 2023', daysLeft: 38, image: '/paris.jpeg' },
    { id: 3, destination: 'Tokyo, Japan', date: 'Aug 18-28, 2023', daysLeft: 72, image: '/tokyo.jpeg' },
  ];

  // Sample data for travel stats
  const travelStats = [
    { title: 'Places Explored', value: 24, icon: '🌍' },
    { title: 'Upcoming Trips', value: 3, icon: '✈️' },
    { title: 'Travel Buddies', value: 8, icon: '👥' },
    { title: 'Saved Places', value: 24, icon: '⭐' },
  ];

  // Sample data for recent bookings
  const recentBookings = [
    { id: 1, destination: 'Bali', hotel: 'Oceanview Resort', date: 'Jun 12-20, 2023', status: 'Confirmed' },
    { id: 2, destination: 'Paris', hotel: 'Le Grand Hotel', date: 'Jul 5-15, 2023', status: 'Pending' },
    { id: 3, destination: 'Tokyo', hotel: 'Sakura Inn', date: 'Aug 18-28, 2023', status: 'Confirmed' },
  ];

  // Sample data for budget
  const budgetData = [
    { category: 'Accommodation', amount: 1200, spent: 800 },
    { category: 'Transportation', amount: 800, spent: 400 },
    { category: 'Food', amount: 600, spent: 250 },
    { category: 'Activities', amount: 500, spent: 150 },
  ];

  // Sample data for packing list
  const packingList = [
    { id: 1, item: 'Passport', packed: true },
    { id: 2, item: 'Travel Insurance', packed: true },
    { id: 3, item: 'Swimsuit', packed: false },
    { id: 4, item: 'Sunscreen', packed: false },
    { id: 5, item: 'Camera', packed: false },
  ];

  // Sample data for recommended destinations
  const recommendedDestinations = [
    { name: 'Santorini, Greece', price: '$799', rating: 4.8, image: '/santorini.jpeg' },
    { name: 'Dubai, UAE', price: '$899', rating: 4.7, image: '/dubai.jpEg' },
    { name: 'Rome, Italy', price: '$699', rating: 4.6, image: '/rome.jpEg' },
    { name: 'Bali, Indonesia', price: '$599', rating: 4.9, image: '/bali.webp' },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      
      <div className="main-content">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-left">
            <div className="logo">TravelPlan Pro</div>
          </div>
          <div className="nav-right">
            <div className="user-profile">
              <div className="user-avatar">S</div>
              <Link to="/admindashboard"><span className="user-name">Sanika</span></Link>
            </div>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="dashboard-content">
          {/* Header */}
          <div className="dashboard-header">
            <h1>Welcome back, Sanika!!</h1>
            <p>Ready to plan your next adventure?</p>
          </div>

          {/* Travel Stats */}
          <div className="stats-grid">
            {travelStats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-content">
                  <h3>{stat.value}</h3>
                  <p>{stat.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Trips */}
          <div className="section">
            <div className="section-header">
              <h2>Upcoming Trips</h2>
              <Link to="/destinations" className="view-all">View All</Link>
            </div>
            <div className="trips-grid">
              {upcomingTrips.map(trip => (
                <div className="trip-card" key={trip.id}>
                  <div className="trip-image" style={{ backgroundImage: `url(${trip.image})` }}></div>
                  <div className="trip-content">
                    <h3>{trip.destination}</h3>
                    <p>{trip.date}</p>
                    <div className="trip-countdown">
                      <span>{trip.daysLeft} days left</span>
                      <Link to='/destinations'><button className="trip-btn">View Details</button></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget and Bookings */}
          <div className="dashboard-grid">
            {/* Budget Overview */}
            <div className="section">
              <div className="section-header">
                <h2>Budget Overview</h2>
                <Link to="/budget" className="view-all">Manage</Link>
              </div>
              <div className="budget-overview">
                <div className="budget-summary">
                  <div className="budget-item">
                    <span>Total Budget</span>
                    <span className="budget-amount">$3,100</span>
                  </div>
                  <div className="budget-item">
                    <span>Spent</span>
                    <span className="budget-amount">$1,600</span>
                  </div>
                  <div className="budget-item">
                    <span>Remaining</span>
                    <span className="budget-amount">$1,500</span>
                  </div>
                </div>
                
                <div className="budget-categories">
                  {budgetData.map((category, index) => (
                    <div className="budget-category" key={index}>
                      <div className="category-info">
                        <span>{category.category}</span>
                        <span>${category.spent} / ${category.amount}</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress" 
                          style={{ width: `${(category.spent / category.amount) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="section">
              <div className="section-header">
                <h2>Recent Bookings</h2>
                <Link to="/booking" className="view-all">View All</Link>
              </div>
              <div className="bookings-list">
                {recentBookings.map(booking => (
                  <div className="booking-item" key={booking.id}>
                    <div className="booking-destination">{booking.destination}</div>
                    <div className="booking-details">
                      <div>{booking.hotel}</div>
                      <div className="booking-date">{booking.date}</div>
                    </div>
                    <div className={`booking-status ${booking.status.toLowerCase()}`}>
                      {booking.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Packing List and Recommendations */}
          <div className="dashboard-grid">
            {/* Packing List */}
            <div className="section">
              <div className="section-header">
                <h2>Packing List</h2>
                <Link to="/packing" className="view-all">Manage</Link>
              </div>
              <div className="packing-list">
                {packingList.map(item => (
                  <div className="packing-item" key={item.id}>
                    <input 
                      type="checkbox" 
                      checked={item.packed} 
                      onChange={() => {}} 
                    />
                    <span className={item.packed ? 'packed' : ''}>{item.item}</span>
                  </div>
                ))}
                <button className="add-item-btn">+ Add Item</button>
              </div>
            </div>

            {/*--------------------Destinations-------------------- */}
            <div className="section">
              <div className="section-header">
                <h2>Recommended Destinations</h2>
                <Link to="/destinations" className="view-all">Explore More</Link>
              </div>
              <div className="destinations-grid">
                {recommendedDestinations.map((destination, index) => (
                  <div className="destination-card" key={index}>
                    <div className="destination-image" style={{ backgroundImage: `url(${destination.image})` }}></div>
                    <div className="destination-info">
                      <h3>{destination.name}</h3>
                      <div className="destination-meta">
                        <span className="price">{destination.price}</span>
                        <span className="rating">⭐ {destination.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default TravelDashboard;