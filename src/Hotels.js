import React from "react";
import { Link } from "react-router-dom";
import NavigationButtons from "./NavigationButtons"; // Back + Close buttons
import "./Hotels.css";

export default function Hotels() {
  const hotels = [
    {
      name: "Oceanview Resort",
      location: "Bali, Indonesia",
      price: "$150 / night",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210d5",
    },
    {
      name: "Le Grand Hotel",
      location: "Paris, France",
      price: "$200 / night",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
    {
      name: "Sakura Inn",
      location: "Tokyo, Japan",
      price: "$120 / night",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1551776235-dde6d4829808",
    },
    {
      name: "Blue Lagoon Suites",
      location: "Santorini, Greece",
      price: "$180 / night",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
  ];

  return (
    <div className="hotels-page">
      <h1 className="hotels-title">🏨 Hotel Stays</h1>
      <p className="hotels-subtitle">Find your perfect stay around the world</p>

      <div className="hotels-grid">
        {hotels.map((hotel, idx) => (
          <div className="hotel-card" key={idx}>
            <div
              className="hotel-image"
              style={{ backgroundImage: `url(${hotel.image})` }}
            ></div>
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p className="hotel-location">{hotel.location}</p>
              <div className="hotel-meta">
                <span className="hotel-price">{hotel.price}</span>
                <span className="hotel-rating">⭐ {hotel.rating}</span>
              </div>
              <Link to="/booking">
                <button className="hotel-btn">Book Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Back + Close */}
      <NavigationButtons />
    </div>
  );
}
