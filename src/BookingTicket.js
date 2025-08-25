// // BookingTicket.js
// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { db } from "./firebase";
// import { ref, push } from "firebase/database";
// import jsPDF from "jspdf";
// import Sidebar from "./Sidebar"; // Make sure this file exists and exports Sidebar

// export default function BookingTicket() {
//   const location = useLocation();
//   const preselectedPlace = location.state?.place;

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     from: "",
//     to: preselectedPlace ? preselectedPlace.name : "",
//     date: "",
//     flightTime: "",
//   });

//   const [ticketDetails, setTicketDetails] = useState({
//     ticketNumber: "",
//     seatNumber: "",
//   });

//   const flightTimes = [
//     "06:00 AM",
//     "08:00 AM",
//     "10:00 AM",
//     "12:00 PM",
//     "02:00 PM",
//     "04:00 PM",
//     "06:00 PM",
//     "08:00 PM",
//   ];

//   useEffect(() => {
//     if (preselectedPlace)
//       setFormData((prev) => ({ ...prev, to: preselectedPlace.name }));
//   }, [preselectedPlace]);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const generateTicketDetails = () => {
//     const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let ticketNum = "SKY-";
//     for (let i = 0; i < 6; i++)
//       ticketNum += chars.charAt(Math.floor(Math.random() * chars.length));
//     const rows = ["A", "B", "C", "D", "E"];
//     const seatLetter = rows[Math.floor(Math.random() * rows.length)];
//     const seatNum = Math.floor(Math.random() * 30) + 1;
//     return { ticketNumber: ticketNum, seatNumber: `${seatLetter}${seatNum}` };
//   };

//   const saveBookingToFirebase = async (booking) => {
//     try {
//       const bookingsRef = ref(db, "bookings");
//       await push(bookingsRef, booking);
//       console.log("Booking saved!");
//     } catch (error) {
//       console.error("Error saving booking:", error);
//     }
//   };

//   const generateTicket = async () => {
//     if (
//       !formData.name ||
//       !formData.email ||
//       !formData.from ||
//       !formData.to ||
//       !formData.date ||
//       !formData.flightTime
//     ) {
//       alert("⚠️ Please fill all fields!");
//       return;
//     }

//     const details = generateTicketDetails();
//     setTicketDetails(details);
//     await saveBookingToFirebase({ ...formData, ...details });
//     alert("✅ Ticket generated successfully!");
//   };

//   const downloadPDF = () => {
//     if (!ticketDetails.ticketNumber) return;

//     const doc = new jsPDF("p", "mm", "a4");
//     doc.setFontSize(18);
//     doc.text("Flight Boarding Pass", 105, 20, { align: "center" });

//     doc.setFontSize(12);
//     doc.text(`Ticket: ${ticketDetails.ticketNumber}`, 20, 40);
//     doc.text(`Seat: ${ticketDetails.seatNumber}`, 20, 50);
//     doc.text(`Name: ${formData.name}`, 20, 60);
//     doc.text(`From: ${formData.from}`, 20, 70);
//     doc.text(`To: ${formData.to}`, 20, 80);
//     doc.text(`Date: ${formData.date}`, 20, 90);
//     doc.text(`Flight Time: ${formData.flightTime}`, 20, 100);

//     doc.save(`${ticketDetails.ticketNumber}.pdf`);
//   };

//   return (
//     <div style={{ display: "flex", minHeight: "100vh", background: "#f9fafb" }}>
//       <Sidebar />
//       <div
//         style={{
//           maxWidth: "500px",
//           margin: "40px auto",
//           padding: "1.5rem",
//           fontFamily: "Arial, sans-serif",
//           background: "#fff",
//           borderRadius: "12px",
//           boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
//           flex: 1,
//         }}
//       >
//         <h2
//           style={{
//             textAlign: "center",
//             marginBottom: "1.5rem",
//             fontSize: "1.6rem",
//             color: "#1e40af",
//           }}
//         >
//           🎫 Flight Ticket Booking
//         </h2>

//         <form style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             style={inputStyle}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             style={inputStyle}
//           />
//           <input
//             type="text"
//             name="from"
//             placeholder="Departure City"
//             value={formData.from}
//             onChange={handleChange}
//             style={inputStyle}
//           />
//           <input
//             type="text"
//             name="to"
//             placeholder="Destination City"
//             value={formData.to}
//             style={inputStyle}
//             readOnly
//           />
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             style={inputStyle}
//           />
//           <select
//             name="flightTime"
//             value={formData.flightTime}
//             onChange={handleChange}
//             style={inputStyle}
//           >
//             <option value="">Select Flight Time</option>
//             {flightTimes.map((time, i) => (
//               <option key={i} value={time}>
//                 {time}
//               </option>
//             ))}
//           </select>
//         </form>

//         <button onClick={generateTicket} style={buttonStyle}>
//           Generate Boarding Pass
//         </button>

//         {ticketDetails.ticketNumber && (
//           <>
//             <div
//               style={{
//                 marginTop: "1.5rem",
//                 padding: "1rem",
//                 background: "#eff6ff",
//                 borderRadius: "10px",
//                 borderLeft: "5px solid #2563eb",
//                 lineHeight: "1.6",
//                 fontFamily: "Arial, sans-serif",
//                 textAlign: "center",
//               }}
//             >
//               <h3 style={{ marginBottom: "0.5rem" }}>🛫 Your Boarding Pass</h3>
//               <p>
//                 <strong>🎟️ Ticket:</strong> {ticketDetails.ticketNumber}
//               </p>
//               <p>
//                 <strong>🪑 Seat:</strong> {ticketDetails.seatNumber}
//               </p>
//               <p>
//                 <strong>📍 From:</strong> {formData.from}
//               </p>
//               <p>
//                 <strong>📍 To:</strong> {formData.to}
//               </p>
//               <p>
//                 <strong>📅 Date:</strong> {formData.date}
//               </p>
//               <p>
//                 <strong>⏰ Flight Time:</strong> {formData.flightTime}
//               </p>
//             </div>

//             <button
//               onClick={downloadPDF}
//               style={{ ...buttonStyle, background: "#16a34a", marginTop: "1rem" }}
//             >
//               Download PDF
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// const inputStyle = {
//   padding: "0.7rem",
//   border: "1px solid #d1d5db",
//   borderRadius: "8px",
//   fontSize: "0.95rem",
// };

// const buttonStyle = {
//   marginTop: "1rem",
//   padding: "0.8rem",
//   background: "#2563eb",
//   color: "#fff",
//   fontSize: "1rem",
//   fontWeight: "bold",
//   border: "none",
//   borderRadius: "8px",
//   cursor: "pointer",
//   transition: "0.3s",
// };








// BookingTicket.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db } from "./firebase";
import { ref, push } from "firebase/database";
import jsPDF from "jspdf";
import Sidebar from "./Sidebar";

export default function BookingTicket() {
  const location = useLocation();
  const preselectedPlace = location.state?.place;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    from: "",
    to: preselectedPlace ? preselectedPlace.name : "",
    date: "",
    flightTime: "",
  });

  const [ticketDetails, setTicketDetails] = useState({
    ticketNumber: "",
    seatNumber: "",
  });

  const flightTimes = [
    "06:00 AM",
    "08:00 AM",
    "10:00 AM",
    "12:00 PM",
    "02:00 PM",
    "04:00 PM",
    "06:00 PM",
    "08:00 PM",
  ];

  useEffect(() => {
    if (preselectedPlace)
      setFormData((prev) => ({ ...prev, to: preselectedPlace.name }));
  }, [preselectedPlace]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const generateTicketDetails = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let ticketNum = "SKY-";
    for (let i = 0; i < 6; i++)
      ticketNum += chars.charAt(Math.floor(Math.random() * chars.length));
    const rows = ["A", "B", "C", "D", "E"];
    const seatLetter = rows[Math.floor(Math.random() * rows.length)];
    const seatNum = Math.floor(Math.random() * 30) + 1;
    return { ticketNumber: ticketNum, seatNumber: `${seatLetter}${seatNum}` };
  };

  const saveBookingToFirebase = async (booking) => {
    try {
      const bookingsRef = ref(db, "bookings");
      await push(bookingsRef, booking);
      console.log("Booking saved!");
    } catch (error) {
      console.error("Error saving booking:", error);
    }
  };

  const generateTicket = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.from ||
      !formData.to ||
      !formData.date ||
      !formData.flightTime
    ) {
      alert("⚠️ Please fill all fields!");
      return;
    }

    const details = generateTicketDetails();
    setTicketDetails(details);
    await saveBookingToFirebase({ ...formData, ...details });
    alert("✅ Ticket generated successfully!");
  };

  const downloadPDF = () => {
    if (!ticketDetails.ticketNumber) return;

    const doc = new jsPDF("p", "mm", "a4");
    doc.setFontSize(18);
    doc.text("Flight Boarding Pass", 105, 20, { align: "center" });

    doc.setFontSize(12);
    doc.text(`Ticket: ${ticketDetails.ticketNumber}`, 20, 40);
    doc.text(`Seat: ${ticketDetails.seatNumber}`, 20, 50);
    doc.text(`Name: ${formData.name}`, 20, 60);
    doc.text(`From: ${formData.from}`, 20, 70);
    doc.text(`To: ${formData.to}`, 20, 80);
    doc.text(`Date: ${formData.date}`, 20, 90);
    doc.text(`Flight Time: ${formData.flightTime}`, 20, 100);

    doc.save(`${ticketDetails.ticketNumber}.pdf`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        minHeight: "100vh",
        background: "#f9fafb",
      }}
    >
      <Sidebar />
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          margin: "20px auto",
          padding: "5vw",
          fontFamily: "Arial, sans-serif",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
          flex: 1,
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            fontSize: "clamp(20px, 4vw, 26px)",
            color: "#1e40af",
          }}
        >
          🎫 Flight Ticket Booking
        </h2>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={responsiveInputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={responsiveInputStyle}
          />
          <input
            type="text"
            name="from"
            placeholder="Departure City"
            value={formData.from}
            onChange={handleChange}
            style={responsiveInputStyle}
          />
          <input
            type="text"
            name="to"
            placeholder="Destination City"
            value={formData.to}
            style={responsiveInputStyle}
            readOnly
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={responsiveInputStyle}
          />
          <select
            name="flightTime"
            value={formData.flightTime}
            onChange={handleChange}
            style={responsiveInputStyle}
          >
            <option value="">Select Flight Time</option>
            {flightTimes.map((time, i) => (
              <option key={i} value={time}>
                {time}
              </option>
            ))}
          </select>
        </form>

        <button onClick={generateTicket} style={responsiveButtonStyle}>
          Generate Boarding Pass
        </button>

        {ticketDetails.ticketNumber && (
          <>
            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem",
                background: "#eff6ff",
                borderRadius: "10px",
                borderLeft: "5px solid #2563eb",
                lineHeight: "1.6",
                fontFamily: "Arial, sans-serif",
                textAlign: "center",
              }}
            >
              <h3 style={{ marginBottom: "0.5rem" }}>🛫 Your Boarding Pass</h3>
              <p>
                <strong>🎟️ Ticket:</strong> {ticketDetails.ticketNumber}
              </p>
              <p>
                <strong>🪑 Seat:</strong> {ticketDetails.seatNumber}
              </p>
              <p>
                <strong>📍 From:</strong> {formData.from}
              </p>
              <p>
                <strong>📍 To:</strong> {formData.to}
              </p>
              <p>
                <strong>📅 Date:</strong> {formData.date}
              </p>
              <p>
                <strong>⏰ Flight Time:</strong> {formData.flightTime}
              </p>
            </div>

            <button
              onClick={downloadPDF}
              style={{
                ...responsiveButtonStyle,
                background: "#16a34a",
                marginTop: "1rem",
              }}
            >
              Download PDF
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const responsiveInputStyle = {
  padding: "0.7rem",
  border: "1px solid #d1d5db",
  borderRadius: "8px",
  fontSize: "clamp(14px, 2vw, 16px)",
  boxSizing: "border-box",
};

const responsiveButtonStyle = {
  marginTop: "1rem",
  padding: "0.8rem",
  width: "100%",
  background: "#2563eb",
  color: "#fff",
  fontSize: "clamp(15px, 2vw, 18px)",
  fontWeight: "bold",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "0.3s",
};

