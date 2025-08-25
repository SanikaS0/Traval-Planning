// // // DestinationDetail.js
// // import React from "react";
// // import { useParams, useLocation, useNavigate } from "react-router-dom";

// // export default function DestinationDetail() {
// //   const { name } = useParams();
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const place = location.state?.place;

// //   if (!place) {
// //     return (
// //       <div style={styles.container}>
// //         <h2 style={styles.notFound}>Destination not found</h2>
// //         <button onClick={() => navigate("/")} style={styles.primaryBtn}>
// //           ⬅ Back to Destinations
// //         </button>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div style={styles.page}>
// //       {/* Back button */}
// //       <button onClick={() => navigate("/")} style={styles.backBtn}>
// //         ⬅ Back
// //       </button>

// //       {/* Title */}
// //       <h1 style={styles.title}>{place.name}</h1>

// //       {/* Main Image */}
// //       <img src={place.image} alt={place.name} style={styles.image} />

// //       {/* Short Description */}
// //       <p style={styles.desc}>{place.description}</p>

// //       {/* Extra Image Gallery */}
// //       <h2 style={styles.subTitle}>Explore {place.name} in Pictures</h2>
// //       <div style={styles.gallery}>
// //         <img
// //           src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Goa_Beach_Sunset.jpg"
// //           alt="Beach"
// //           style={styles.galleryImg}
// //         />
// //         <img
// //           src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Himalayas_landscape.jpg"
// //           alt="Mountain"
// //           style={styles.galleryImg}
// //         />
// //         <img
// //           src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Mumbai_Skyline.jpg"
// //           alt="City"
// //           style={styles.galleryImg}
// //         />
// //         <img
// //           src="https://upload.wikimedia.org/wikipedia/commons/2/20/Konark_Temple_Sunrise.jpg"
// //           alt="Temple"
// //           style={styles.galleryImg}
// //         />
// //       </div>

// //       {/* Why Visit */}
// //       <h2 style={styles.subTitle}>Why Visit {place.name}?</h2>
// //       <ul style={styles.list}>
// //         <li>
// //           <b>Top Attractions:</b> Beaches, mountains, local markets, heritage sites
// //         </li>
// //         <li>
// //           <b>Best Time to Visit:</b> November – March
// //         </li>
// //         <li>
// //           <b>Average Trip Cost:</b> $800 – $1200 (per person)
// //         </li>
// //         <li>
// //           <b>Ideal Duration:</b> 5 – 7 Days
// //         </li>
// //       </ul>

// //       {/* Things To Do */}
// //       <h2 style={styles.subTitle}>Things To Do</h2>
// //       <ul style={styles.list}>
// //         <li>Enjoy local food and culture</li>
// //         <li>Adventure sports & trekking</li>
// //         <li>Visit historical monuments</li>
// //         <li>Shopping in street markets</li>
// //       </ul>

// //       {/* Travel Tips */}
// //       <h2 style={styles.subTitle}>Travel Tips</h2>
// //       <ul style={styles.list}>
// //         <li>Carry light cotton clothes for summers and warm jackets for winters.</li>
// //         <li>Try local street food but drink bottled water only.</li>
// //         <li>Book flights and hotels 2 months in advance for cheaper rates.</li>
// //         <li>Respect local traditions and cultural norms.</li>
// //       </ul>

// //       {/* NEW: How to Reach */}
// //       <h2 style={styles.subTitle}>How to Reach</h2>
// //       <ul style={styles.list}>
// //         <li><b>By Air:</b> Nearest airport within 20–50 km, connected to major cities.</li>
// //         <li><b>By Train:</b> Railway station with regular trains from metro cities.</li>
// //         <li><b>By Road:</b> Well-connected highways, buses & cabs available.</li>
// //       </ul>

// //       {/* NEW: Local Cuisine */}
// //       <h2 style={styles.subTitle}>Must-Try Local Cuisine</h2>
// //       <ul style={styles.list}>
// //         <li>🍛 Traditional curry dishes full of spices</li>
// //         <li>🥥 Coconut-based seafood delicacies</li>
// //         <li>🥭 Seasonal fruits & sweets unique to the region</li>
// //         <li>🍵 Local tea/coffee varieties to refresh yourself</li>
// //       </ul>

// //       {/* NEW: Shopping */}
// //       <h2 style={styles.subTitle}>Shopping & Souvenirs</h2>
// //       <ul style={styles.list}>
// //         <li>Handcrafted jewelry & local artifacts</li>
// //         <li>Street markets for clothes & accessories</li>
// //         <li>Traditional art pieces & home décor</li>
// //         <li>Local spices, tea & handmade souvenirs</li>
// //       </ul>

// //       {/* Hotels */}
// //       <h2 style={styles.subTitle}>Popular Hotels</h2>
// //       <div style={styles.cardContainer}>
// //         <div style={styles.card}>
// //           <img
// //             src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Taj_Mahal_Palace_Hotel_Mumbai.jpg"
// //             alt="Hotel"
// //             style={styles.cardImg}
// //           />
// //           <h3 style={styles.cardTitle}>Seaside Resort</h3>
// //           <p style={styles.cardText}>
// //             Luxury stay near the beach with spa & pool facilities.
// //           </p>
// //         </div>
// //         <div style={styles.card}>
// //           <img
// //             src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Oberoi_Udaivilas_Udaipur.jpg"
// //             alt="Resort"
// //             style={styles.cardImg}
// //           />
// //           <h3 style={styles.cardTitle}>Mountain View Inn</h3>
// //           <p style={styles.cardText}>
// //             Cozy rooms with breathtaking mountain views.
// //           </p>
// //         </div>
// //       </div>

// //       {/* NEW: Traveler Reviews */}
// //       <h2 style={styles.subTitle}>Traveler Reviews</h2>
// //       <div style={styles.reviewBox}>
// //         <p><b>⭐⭐⭐⭐⭐ Priya S.</b> – "Amazing experience, food was delicious and beaches were stunning!"</p>
// //         <p><b>⭐⭐⭐⭐ Raj K.</b> – "Great hospitality, loved the cultural vibes of the place."</p>
// //         <p><b>⭐⭐⭐⭐⭐ Emily D.</b> – "Perfect destination for family vacation, kids enjoyed a lot."</p>
// //       </div>

// //       {/* Booking Buttons */}
// //       <h2 style={styles.subTitle}>Book Your Trip</h2>
// //       <div style={styles.btnGroup}>
// //         <button style={styles.successBtn}>🏨 Reserve Stay</button>
// //         <button style={styles.warningBtn}>✈️ Reserve Flight</button>
// //       </div>
// //     </div>
// //   );
// // }

// // /* ---------- CSS-in-JS Styles ---------- */
// // const styles = {
// //   page: {
// //     padding: "30px",
// //     fontFamily: "Arial, sans-serif",
// //     maxWidth: "1000px",
// //     margin: "0 auto",
// //     color: "#1f2937",
// //   },
// //   container: {
// //     textAlign: "center",
// //     padding: "40px",
// //   },
// //   notFound: {
// //     fontSize: "22px",
// //     marginBottom: "20px",
// //     color: "#dc2626",
// //   },
// //   title: {
// //     fontSize: "2.4rem",
// //     fontWeight: "700",
// //     marginBottom: "15px",
// //     color: "#111827",
// //     textAlign: "center",
// //   },
// //   subTitle: {
// //     fontSize: "1.6rem",
// //     fontWeight: "600",
// //     marginTop: "30px",
// //     marginBottom: "15px",
// //     color: "#2563eb",
// //   },
// //   image: {
// //     width: "100%",
// //     maxHeight: "450px",
// //     objectFit: "cover",
// //     borderRadius: "12px",
// //     marginBottom: "20px",
// //     boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
// //   },
// //   desc: {
// //     fontSize: "16px",
// //     color: "#374151",
// //     marginBottom: "20px",
// //     lineHeight: "1.6",
// //     textAlign: "justify",
// //   },
// //   gallery: {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
// //     gap: "15px",
// //     marginBottom: "20px",
// //   },
// //   galleryImg: {
// //     width: "100%",
// //     borderRadius: "10px",
// //     height: "200px",
// //     objectFit: "cover",
// //     boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
// //   },
// //   list: {
// //     marginBottom: "20px",
// //     lineHeight: "1.8",
// //     paddingLeft: "20px",
// //   },
// //   cardContainer: {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
// //     gap: "20px",
// //     marginBottom: "20px",
// //   },
// //   card: {
// //     background: "white",
// //     borderRadius: "12px",
// //     boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
// //     padding: "15px",
// //     textAlign: "center",
// //   },
// //   cardImg: {
// //     width: "100%",
// //     borderRadius: "10px",
// //     marginBottom: "12px",
// //     height: "180px",
// //     objectFit: "cover",
// //   },
// //   cardTitle: {
// //     fontSize: "18px",
// //     fontWeight: "600",
// //     marginBottom: "8px",
// //   },
// //   cardText: {
// //     fontSize: "14px",
// //     color: "#555",
// //   },
// //   reviewBox: {
// //     background: "#f9fafb",
// //     padding: "15px",
// //     borderRadius: "10px",
// //     marginBottom: "20px",
// //     boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
// //   },
// //   btnGroup: {
// //     display: "flex",
// //     gap: "12px",
// //     marginTop: "15px",
// //   },
// //   primaryBtn: {
// //     background: "#2563eb",
// //     color: "white",
// //     padding: "12px 20px",
// //     border: "none",
// //     borderRadius: "8px",
// //     cursor: "pointer",
// //     fontWeight: "600",
// //   },
// //   backBtn: {
// //     background: "#2563eb",
// //     color: "white",
// //     padding: "8px 16px",
// //     border: "none",
// //     borderRadius: "8px",
// //     cursor: "pointer",
// //     fontWeight: "500",
// //     marginBottom: "20px",
// //   },
// //   successBtn: {
// //     flex: 1,
// //     background: "#16a34a",
// //     color: "white",
// //     padding: "14px",
// //     border: "none",
// //     borderRadius: "8px",
// //     cursor: "pointer",
// //     fontWeight: "600",
// //     fontSize: "15px",
// //   },
// //   warningBtn: {
// //     flex: 1,
// //     background: "#f59e0b",
// //     color: "white",
// //     padding: "14px",
// //     border: "none",
// //     borderRadius: "8px",
// //     cursor: "pointer",
// //     fontWeight: "600",
// //     fontSize: "15px",
// //   },
// // };




// src/DestinationDetails.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import destinations from "./DestinationsData";

export default function DestinationDetails() {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === parseInt(id));

  if (!destination) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>❌ Destination not found</h2>
        <Link to="/">⬅ Back to Destinations</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>{destination.name}</h1>
      <img
        src={destination.image}
        alt={destination.name}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "10px" }}
      />

      <p style={{ marginTop: "1rem", lineHeight: "1.6" }}>{destination.description}</p>

      <h2>✈ Nearest Airport</h2>
      <p>{destination.air}</p>

      <h2>🏨 Hotels</h2>
      <ul>
        {destination.hotels.map((hotel, i) => (
          <li key={i}>{hotel}</li>
        ))}
      </ul>

      <h2>📍 Attractions</h2>
      <ul>
        {destination.attractions.map((place, i) => (
          <li key={i}>{place}</li>
        ))}
      </ul>

      <h2>🛫 Popular Routes</h2>
      <ul>
        {destination.routes.map((route, i) => (
          <li key={i}>{route}</li>
        ))}
      </ul>

      <h2>⏰ Sample Flights</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", marginTop: "1rem" }}>
        <thead>
          <tr style={{ background: "#eee" }}>
            <th>Airline</th>
            <th>Departure</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {destination.flights.map((f, i) => (
            <tr key={i}>
              <td>{f.airline}</td>
              <td>{f.from}</td>
              <td>{f.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>📸 More Photos</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {destination.moreImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Extra ${i}`}
            style={{ width: "300px", borderRadius: "10px" }}
          />
        ))}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <Link to="/">⬅ Back to Destinations</Link>
      </div>
    </div>
  );
}



