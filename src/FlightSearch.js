// import React from "react";
// import { useLocation } from "react-router-dom";
// import Sidebar from "./Sidebar";

// export default function FlightSearch() {
//   const location = useLocation();
//   const place = location.state?.place; // Get selected destination
//   const destination = place?.name || "New York"; // fallback if no place selected

//   const handleSearch = () => {
//     // Encode destination for URL
//     const query = encodeURIComponent(destination);
//     const url = `https://www.google.com/travel/flights?q=flights+to+${query}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div style={styles.container}>
//       <Sidebar />
//       <h1 style={styles.heading}>Search Flights</h1>
//       <img
//         src="https://cdn-icons-png.flaticon.com/512/190/190601.png"
//         alt="Airplane"
//         style={styles.image}
//       />
//       <p style={{ fontSize: "18px", marginBottom: "15px" }}>
//         Destination: <strong>{destination}</strong>
//       </p>
//       <button style={styles.button} onClick={handleSearch}>
//         Search Flights to {destination}
//       </button>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: "center",
//     padding: "50px",
//     fontFamily: "Arial, sans-serif",
//   },
//   heading: {
//     fontSize: "28px",
//     marginBottom: "20px",
//   },
//   image: {
//     width: "150px",
//     marginBottom: "20px",
//   },
//   button: {
//     padding: "12px 24px",
//     fontSize: "16px",
//     backgroundColor: "#4285F4",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//   },
// };







import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function FlightSearch() {
  const location = useLocation();
  const place = location.state?.place; // Get selected destination
  const destination = place?.name || "New York"; // fallback if no place selected

  const handleSearch = () => {
    const query = encodeURIComponent(destination);
    const url = `https://www.google.com/travel/flights?q=flights+to+${query}`;
    window.open(url, "_blank");
  };

  return (
    <div style={styles.container}>
      <Sidebar />
      <h1 style={styles.heading}>Search Flights</h1>
      <img
        src="https://cdn-icons-png.flaticon.com/512/190/190601.png"
        alt="Airplane"
        style={styles.image}
      />
      <p style={styles.text}>
        Destination: <strong>{destination}</strong>
      </p>
      <button style={styles.button} onClick={handleSearch}>
        Search Flights to {destination}
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "5vw", // responsive padding
    fontFamily: "Arial, sans-serif",
    maxWidth: "900px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "clamp(22px, 4vw, 28px)", // responsive font
    marginBottom: "20px",
  },
  image: {
    width: "20vw", // responsive width
    maxWidth: "150px",
    marginBottom: "20px",
  },
  text: {
    fontSize: "clamp(16px, 2vw, 18px)",
    marginBottom: "15px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "clamp(14px, 2vw, 16px)",
    backgroundColor: "#4285F4",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  // Optional: hover effect for mobile-friendly feedback
  "@media (hover: hover)": {
    button: {
      ":hover": {
        backgroundColor: "#357ae8",
      },
    },
  },
};
