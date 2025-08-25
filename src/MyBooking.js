// // import React, { useEffect, useState } from "react";
// // import { db } from "./firebase";
// // import { ref, onValue } from "firebase/database";
// // import Sidebar from "./Sidebar";

// // export default function MyBookings() {
// //   const [bookings, setBookings] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const bookingsRef = ref(db, "bookings");
// //     onValue(bookingsRef, (snapshot) => {
// //       const data = snapshot.val();
// //       if (data) {
// //         const bookingsArray = Object.keys(data).map((key) => ({
// //           id: key,
// //           ...data[key],
// //         }));
// //         setBookings(bookingsArray);
// //       } else {
// //         setBookings([]);
// //       }
// //       setLoading(false);
// //     });
// //   }, []);

// //   return (
// //     <div style={styles.container}>
// //       <Sidebar />
// //       <div style={styles.content}>
// //         <h2 style={styles.title}>My Bookings</h2>

// //         {loading ? (
// //           <p style={styles.loading}>Loading...</p>
// //         ) : bookings.length === 0 ? (
// //           <p style={styles.noBookings}>❌ No bookings yet!</p>
// //         ) : (
// //           <div style={styles.cardsContainer}>
// //             {bookings.map((booking) => (
// //               <div key={booking.id} style={styles.card}>
// //                 <div style={styles.cardHeader}>
// //                   <h3 style={styles.destination}>{booking.destination || booking.to}</h3>
// //                   <span style={styles.statusBadge}>Confirmed</span>
// //                 </div>

// //                 <p><strong>Name:</strong> {booking.name}</p>
// //                 <p><strong>Email:</strong> {booking.email}</p>
// //                 {booking.guests && <p><strong>Guests:</strong> {booking.guests}</p>}
// //                 {booking.startDate && booking.endDate && booking.days && (
// //                   <p><strong>Dates:</strong> {booking.startDate} to {booking.endDate} ({booking.days} days)</p>
// //                 )}
// //                 {booking.payment && <p><strong>Payment Method:</strong> {booking.payment}</p>}
// //                 {booking.payment === "Credit Card" && booking.cardNumber && (
// //                   <p><strong>Card:</strong> **** **** **** {booking.cardNumber.slice(-4)}</p>
// //                 )}
// //                 {booking.payment === "UPI" && booking.upiId && (
// //                   <p><strong>UPI ID:</strong> {booking.upiId}</p>
// //                 )}
// //                 {booking.payment === "Cash" && (
// //                   <p><strong>Note:</strong> {booking.cashNote || "N/A"}</p>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // const styles = {
// //   container: {
// //     display: "flex",
// //     minHeight: "100vh",
// //     background: "#f0f4f8",
// //     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
// //   },
// //   content: {
// //     marginLeft: 250,
// //     marginTop: 40,
// //     width: "calc(100% - 250px)",
// //     padding: 20,
// //   },
// //   title: {
// //     textAlign: "center",
// //     marginBottom: 30,
// //     fontSize: 30,
// //     color: "#1e3a8a",
// //     fontWeight: "bold",
// //     textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
// //   },
// //   loading: {
// //     textAlign: "center",
// //     fontSize: 18,
// //     color: "#374151",
// //   },
// //   noBookings: {
// //     textAlign: "center",
// //     fontSize: 20,
// //     color: "#ef4444",
// //     fontWeight: "bold",
// //   },
// //   // New container for two columns
// //   cardsContainer: {
// //     display: "flex",
// //     flexWrap: "wrap",
// //     gap: "20px",
// //     justifyContent: "space-between",
// //   },
// //   card: {
// //     flex: "0 0 48%", // Two cards per row
// //     borderRadius: 15,
// //     padding: 25,
// //     marginBottom: 20,
// //     background: "linear-gradient(145deg, #e0f2fe, #dbeafe)",
// //     boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
// //     transition: "transform 0.3s, box-shadow 0.3s",
// //   },
// //   cardHeader: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     alignItems: "center",
// //     marginBottom: 15,
// //   },
// //   destination: {
// //     fontSize: 24,
// //     fontWeight: 700,
// //     color: "#1e40af",
// //   },
// //   statusBadge: {
// //     backgroundColor: "#22c55e",
// //     color: "#fff",
// //     padding: "4px 10px",
// //     borderRadius: 12,
// //     fontSize: 12,
// //     fontWeight: "bold",
// //   },
// // };



// import React, { useEffect, useState } from "react";
// import { db } from "./firebase";
// import { ref, onValue } from "firebase/database";
// import Sidebar from "./Sidebar";

// export default function MyBookings() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [hoveredCard, setHoveredCard] = useState(null); // track hover

//   useEffect(() => {
//     const bookingsRef = ref(db, "bookings");
//     onValue(bookingsRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const bookingsArray = Object.keys(data).map((key) => ({
//           id: key,
//           ...data[key],
//         }));
//         setBookings(bookingsArray);
//       } else {
//         setBookings([]);
//       }
//       setLoading(false);
//     });
//   }, []);

//   return (
//     <div style={styles.container}>
//       <Sidebar />
//       <div style={styles.content}>
//         <h2 style={styles.title}>My Bookings</h2>

//         {loading ? (
//           <p style={styles.loading}>Loading...</p>
//         ) : bookings.length === 0 ? (
//           <p style={styles.noBookings}>❌ No bookings yet!</p>
//         ) : (
//           <div style={styles.cardsContainer}>
//             {bookings.map((booking) => {
//               const isHovered = hoveredCard === booking.id;
//               return (
//                 <div
//                   key={booking.id}
//                   style={{
//                     ...styles.card,
//                     transform: isHovered ? "translateY(-5px)" : "translateY(0)",
//                     boxShadow: isHovered
//                       ? "0 12px 24px rgba(0,0,0,0.2)"
//                       : "0 4px 12px rgba(0,0,0,0.08)",
//                   }}
//                   onMouseEnter={() => setHoveredCard(booking.id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                 >
//                   <div style={styles.cardHeader}>
//                     <h3 style={styles.destination}>{booking.destination || booking.to}</h3>
//                     <span style={styles.statusBadge}>Confirmed</span>
//                   </div>

//                   <p><strong>Name:</strong> {booking.name}</p>
//                   <p><strong>Email:</strong> {booking.email}</p>
//                   {booking.guests && <p><strong>Guests:</strong> {booking.guests}</p>}
//                   {booking.startDate && booking.endDate && booking.days && (
//                     <p><strong>Dates:</strong> {booking.startDate} to {booking.endDate} ({booking.days} days)</p>
//                   )}
//                   {booking.payment && <p><strong>Payment Method:</strong> {booking.payment}</p>}
//                   {booking.payment === "Credit Card" && booking.cardNumber && (
//                     <p><strong>Card:</strong> **** **** **** {booking.cardNumber.slice(-4)}</p>
//                   )}
//                   {booking.payment === "UPI" && booking.upiId && (
//                     <p><strong>UPI ID:</strong> {booking.upiId}</p>
//                   )}
//                   {booking.payment === "Cash" && (
//                     <p><strong>Note:</strong> {booking.cashNote || "N/A"}</p>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     minHeight: "100vh",
//     background: "#f9fafb",
//     fontFamily: "'Inter', sans-serif",
//   },
//   content: {
//     marginLeft: 250,
//     marginTop: 40,
//     width: "calc(100% - 250px)",
//     padding: "20px 40px",
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: 40,
//     fontSize: "2rem",
//     color: "#1e40af",
//     fontWeight: 700,
//   },
//   loading: {
//     textAlign: "center",
//     fontSize: 18,
//     color: "#4b5563",
//   },
//   noBookings: {
//     textAlign: "center",
//     fontSize: 20,
//     color: "#ef4444",
//     fontWeight: 600,
//   },
//   cardsContainer: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
//     gap: "20px",
//   },
//   card: {
//     background: "#ffffff",
//     borderRadius: "15px",
//     padding: "20px 25px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     cursor: "default",
//   },
//   cardHeader: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 15,
//   },
//   destination: {
//     fontSize: "1.3rem",
//     fontWeight: 600,
//     color: "#1e3a8a",
//   },
//   statusBadge: {
//     backgroundColor: "#10b981",
//     color: "#fff",
//     padding: "5px 10px",
//     borderRadius: 12,
//     fontSize: 12,
//     fontWeight: 600,
//   },
// };








import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
import Sidebar from "./Sidebar";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const bookingsRef = ref(db, "bookings");
    onValue(bookingsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const bookingsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setBookings(bookingsArray);
      } else {
        setBookings([]);
      }
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive style adjustments
  const contentStyle = {
    ...styles.content,
    marginLeft: windowWidth > 1024 ? 250 : windowWidth > 768 ? 200 : 0,
    width:
      windowWidth > 1024
        ? "calc(100% - 250px)"
        : windowWidth > 768
        ? "calc(100% - 200px)"
        : "100%",
    padding: windowWidth > 768 ? "20px 40px" : "15px 20px",
  };

  const titleStyle = {
    ...styles.title,
    fontSize:
      windowWidth > 1024 ? "2rem" : windowWidth > 768 ? "1.8rem" : "1.6rem",
  };

  const cardsContainerStyle = {
    ...styles.cardsContainer,
    gridTemplateColumns:
      windowWidth < 768 ? "1fr" : "repeat(auto-fill, minmax(300px, 1fr))",
    gap: windowWidth < 768 ? "15px" : "20px",
  };

  const cardStyle = {
    ...styles.card,
    padding: windowWidth < 768 ? "15px 20px" : "20px 25px",
  };

  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={contentStyle}>
        <h2 style={titleStyle}>My Bookings</h2>

        {loading ? (
          <p style={styles.loading}>Loading...</p>
        ) : bookings.length === 0 ? (
          <p style={styles.noBookings}>❌ No bookings yet!</p>
        ) : (
          <div style={cardsContainerStyle}>
            {bookings.map((booking) => {
              const isHovered = hoveredCard === booking.id;
              return (
                <div
                  key={booking.id}
                  style={{
                    ...cardStyle,
                    transform: isHovered ? "translateY(-5px)" : "translateY(0)",
                    boxShadow: isHovered
                      ? "0 12px 24px rgba(0,0,0,0.2)"
                      : "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                  onMouseEnter={() => setHoveredCard(booking.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={styles.cardHeader}>
                    <h3 style={styles.destination}>
                      {booking.destination || booking.to}
                    </h3>
                    <span style={styles.statusBadge}>Confirmed</span>
                  </div>

                  <p>
                    <strong>Name:</strong> {booking.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {booking.email}
                  </p>
                  {booking.guests && <p><strong>Guests:</strong> {booking.guests}</p>}
                  {booking.startDate && booking.endDate && booking.days && (
                    <p>
                      <strong>Dates:</strong> {booking.startDate} to{" "}
                      {booking.endDate} ({booking.days} days)
                    </p>
                  )}
                  {booking.payment && (
                    <p><strong>Payment Method:</strong> {booking.payment}</p>
                  )}
                  {booking.payment === "Credit Card" && booking.cardNumber && (
                    <p>
                      <strong>Card:</strong> **** **** ****{" "}
                      {booking.cardNumber.slice(-4)}
                    </p>
                  )}
                  {booking.payment === "UPI" && booking.upiId && (
                    <p><strong>UPI ID:</strong> {booking.upiId}</p>
                  )}
                  {booking.payment === "Cash" && (
                    <p><strong>Note:</strong> {booking.cashNote || "N/A"}</p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    background: "#f9fafb",
    fontFamily: "'Inter', sans-serif",
    flexDirection: "row",
  },
  content: {
    marginLeft: 250,
    marginTop: 40,
    width: "calc(100% - 250px)",
    padding: "20px 40px",
    transition: "all 0.3s ease",
  },
  title: {
    textAlign: "center",
    marginBottom: 40,
    fontSize: "2rem",
    color: "#1e40af",
    fontWeight: 700,
  },
  loading: {
    textAlign: "center",
    fontSize: 18,
    color: "#4b5563",
  },
  noBookings: {
    textAlign: "center",
    fontSize: 20,
    color: "#ef4444",
    fontWeight: 600,
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "15px",
    padding: "20px 25px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "default",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  destination: {
    fontSize: "1.3rem",
    fontWeight: 600,
    color: "#1e3a8a",
  },
  statusBadge: {
    backgroundColor: "#10b981",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: 12,
    fontSize: 12,
    fontWeight: 600,
  },
};
