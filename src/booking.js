import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "./firebase";
import { ref, push } from "firebase/database";
import Sidebar from './Sidebar';

export default function BookingAndPayment() {
  const location = useLocation();
  const navigate = useNavigate();
  const place = location.state?.place;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: 1,
    startDate: "",
    endDate: "",
    days: 0,
    payment: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    upiId: "",
    cashNote: "",
  });

  useEffect(() => {
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      const diffTime = end - start;
      const diffDays = diffTime / (1000 * 60 * 60 * 24);

      setFormData((prev) => ({
        ...prev,
        days: diffDays > 0 ? diffDays : 0,
      }));
    }
  }, [formData.startDate, formData.endDate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentSelect = (method) => {
    setFormData((prev) => ({
      ...prev,
      payment: method,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bookingsRef = ref(db, "bookings");
      await push(bookingsRef, {
        destination: place?.name,
        ...formData,
        createdAt: new Date().toISOString(),
      });

      alert("✅ Booking Sucessfully!!");
      navigate("/MyBooking");
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("❌ Failed to save booking!");
    }
  };

  return (
    <div style={styles.container}>
      <Sidebar />
      <h2 style={styles.heading}>Booking & Payment</h2>
      <h3 style={styles.subHeading}>{place?.name}</h3>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Name:</label>
        <input style={styles.input} type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label style={styles.label}>Email:</label>
        <input style={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label style={styles.label}>Guests:</label>
        <input style={styles.input} type="number" name="guests" min="1" value={formData.guests} onChange={handleChange} required />

        <label style={styles.label}>Start Date:</label>
        <input style={styles.input} type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />

        <label style={styles.label}>End Date:</label>
        <input style={styles.input} type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />

        <p style={styles.days}><strong>Number of Days:</strong> {formData.days}</p>

        <h3 style={styles.subHeading}>Choose Payment Method:</h3>
        <div style={styles.paymentOptions}>
          <button type="button" style={formData.payment === "Credit Card" ? styles.selectedButton : styles.button} onClick={() => handlePaymentSelect("Credit Card")}>Credit Card</button>
          <button type="button" style={formData.payment === "UPI" ? styles.selectedButton : styles.button} onClick={() => handlePaymentSelect("UPI")}>UPI</button>
          <button type="button" style={formData.payment === "Cash" ? styles.selectedButton : styles.button} onClick={() => handlePaymentSelect("Cash")}>Cash on Arrival</button>
        </div>

        {/* Credit Card Form */}
        {formData.payment === "Credit Card" && (
          <div style={styles.paymentBox}>
            <label style={styles.label}>Card Number:</label>
            <input style={styles.input} type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />

            <label style={styles.label}>Expiry Date:</label>
            <input style={styles.input} type="month" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />

            <label style={styles.label}>CVV:</label>
            <input style={styles.input} type="password" name="cvv" value={formData.cvv} onChange={handleChange} required />
          </div>
        )}

        {/* UPI Form */}
        {formData.payment === "UPI" && (
          <div style={styles.paymentBox}>
            <label style={styles.label}>Enter UPI ID:</label>
            <input style={styles.input} type="text" name="upiId" value={formData.upiId} onChange={handleChange} required />
            <p style={styles.note}>Scan QR:</p>
            <img src="/upi-qr.jpg" alt="UPI QR" style={styles.qrImage} />
          </div>
        )}

        {/* Cash on Arrival */}
        {formData.payment === "Cash" && (
          <div style={styles.paymentBox}>
            <label style={styles.label}>Note (optional):</label>
            <input style={styles.input} type="text" name="cashNote" value={formData.cashNote} onChange={handleChange} />
            <p style={styles.note}>💵 You will pay when you arrive.</p>
          </div>
        )}

        <button type="submit" style={styles.submitButton}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

// ✅ Inline Styling
const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "25px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "10px",
    fontSize: "26px",
    color: "#333",
  },
  subHeading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "20px",
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontWeight: "bold",
    marginTop: "10px",
    marginBottom: "5px",
    color: "#444",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    fontSize: "15px",
  },
  days: {
    marginTop: "5px",
    fontSize: "15px",
    color: "#333",
  },
  paymentOptions: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  button: {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "1px solid #007bff",
    background: "#fff",
    color: "#007bff",
    cursor: "pointer",
    flex: 1,
    fontSize: "15px",
  },
  selectedButton: {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "1px solid #007bff",
    background: "#007bff",
    color: "#fff",
    cursor: "pointer",
    flex: 1,
    fontSize: "15px",
  },
  paymentBox: {
    marginBottom: "15px",
    padding: "15px",
    border: "1px solid #eee",
    borderRadius: "10px",
    background: "#f9f9f9",
  },
  note: {
    marginTop: "5px",
    fontSize: "14px",
    color: "#555",
  },
  qrImage: {
    width: "200px",
    marginTop: "10px",
    borderRadius: "8px",
  },
  submitButton: {
    marginTop: "20px",
    padding: "12px 20px",
    border: "none",
    borderRadius: "8px",
    background: "#28a745",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};  





// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { db } from "./firebase";
// import { ref, push } from "firebase/database";
// import Sidebar from './Sidebar';

// export default function BookingAndPayment() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const place = location.state?.place;

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     guests: 1,
//     startDate: "",
//     endDate: "",
//     days: 0,
//     payment: "",
//     cardNumber: "",
//     expiryDate: "",
//     cvv: "",
//     upiId: "",
//     cashNote: "",
//   });

//   useEffect(() => {
//     if (formData.startDate && formData.endDate) {
//       const start = new Date(formData.startDate);
//       const end = new Date(formData.endDate);
//       const diffTime = end - start;
//       const diffDays = diffTime / (1000 * 60 * 60 * 24);

//       setFormData((prev) => ({
//         ...prev,
//         days: diffDays > 0 ? diffDays : 0,
//       }));
//     }
//   }, [formData.startDate, formData.endDate]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handlePaymentSelect = (method) => {
//     setFormData((prev) => ({
//       ...prev,
//       payment: method,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const bookingsRef = ref(db, "bookings");
//       await push(bookingsRef, {
//         destination: place?.name,
//         ...formData,
//         createdAt: new Date().toISOString(),
//       });

//       // Redirect to MyBookings with success message
//       navigate("/MyBooking", { state: { message: "✅ Booking Successfully!" } });
//     } catch (error) {
//       console.error("Error saving booking:", error);
//       alert("❌ Failed to save booking!");
//     }
//   };

//   return (
//     <div style={styles.wrapper}>
//       <Sidebar />
//       <div style={styles.container}>
//         <h2 style={styles.heading}>Booking & Payment</h2>
//         <h3 style={styles.subHeading}>{place?.name}</h3>

//         <form onSubmit={handleSubmit} style={styles.form}>
//           <label style={styles.label}>Name:</label>
//           <input style={styles.input} type="text" name="name" value={formData.name} onChange={handleChange} required />

//           <label style={styles.label}>Email:</label>
//           <input style={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} required />

//           <label style={styles.label}>Guests:</label>
//           <input style={styles.input} type="number" name="guests" min="1" value={formData.guests} onChange={handleChange} required />

//           <label style={styles.label}>Start Date:</label>
//           <input style={styles.input} type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />

//           <label style={styles.label}>End Date:</label>
//           <input style={styles.input} type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />

//           <p style={styles.days}><strong>Number of Days:</strong> {formData.days}</p>

//           <h3 style={styles.subHeading}>Choose Payment Method:</h3>
//           <div style={styles.paymentOptions}>
//             <button type="button" style={formData.payment === "Credit Card" ? styles.selectedButton : styles.button} onClick={() => handlePaymentSelect("Credit Card")}>Credit Card</button>
//             <button type="button" style={formData.payment === "UPI" ? styles.selectedButton : styles.button} onClick={() => handlePaymentSelect("UPI")}>UPI</button>
//             <button type="button" style={formData.payment === "Cash" ? styles.selectedButton : styles.button} onClick={() => handlePaymentSelect("Cash")}>Cash on Arrival</button>
//           </div>

//           {/* Credit Card Form */}
//           {formData.payment === "Credit Card" && (
//             <div style={styles.paymentBox}>
//               <label style={styles.label}>Card Number:</label>
//               <input style={styles.input} type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />

//               <label style={styles.label}>Expiry Date:</label>
//               <input style={styles.input} type="month" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />

//               <label style={styles.label}>CVV:</label>
//               <input style={styles.input} type="password" name="cvv" value={formData.cvv} onChange={handleChange} required />
//             </div>
//           )}

//           {/* UPI Form */}
//           {formData.payment === "UPI" && (
//             <div style={styles.paymentBox}>
//               <label style={styles.label}>Enter UPI ID:</label>
//               <input style={styles.input} type="text" name="upiId" value={formData.upiId} onChange={handleChange} required />
//               <p style={styles.note}>Scan QR:</p>
//               <img src="/upi-qr.jpg" alt="UPI QR" style={styles.qrImage} />
//             </div>
//           )}

//           {/* Cash on Arrival */}
//           {formData.payment === "Cash" && (
//             <div style={styles.paymentBox}>
//               <label style={styles.label}>Note (optional):</label>
//               <input style={styles.input} type="text" name="cashNote" value={formData.cashNote} onChange={handleChange} />
//               <p style={styles.note}>💵 You will pay when you arrive.</p>
//             </div>
//           )}

//           <button type="submit" style={styles.submitButton}>Confirm Booking</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   wrapper: { display: "flex" },
//   container: {
//     maxWidth: "600px",
//     margin: "40px auto",
//     padding: "25px",
//     border: "1px solid #ddd",
//     borderRadius: "12px",
//     boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
//     backgroundColor: "#fff",
//     fontFamily: "Arial, sans-serif",
//   },
//   heading: { textAlign: "center", marginBottom: "10px", fontSize: "26px", color: "#333" },
//   subHeading: { textAlign: "center", marginBottom: "20px", fontSize: "20px", color: "#555" },
//   form: { display: "flex", flexDirection: "column" },
//   label: { fontWeight: "bold", marginTop: "10px", marginBottom: "5px", color: "#444" },
//   input: { padding: "10px", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "10px", fontSize: "15px" },
//   days: { marginTop: "5px", fontSize: "15px", color: "#333" },
//   paymentOptions: { display: "flex", gap: "10px", marginBottom: "15px" },
//   button: { padding: "10px 15px", borderRadius: "8px", border: "1px solid #007bff", background: "#fff", color: "#007bff", cursor: "pointer", flex: 1, fontSize: "15px" },
//   selectedButton: { padding: "10px 15px", borderRadius: "8px", border: "1px solid #007bff", background: "#007bff", color: "#fff", cursor: "pointer", flex: 1, fontSize: "15px" },
//   paymentBox: { marginBottom: "15px", padding: "15px", border: "1px solid #eee", borderRadius: "10px", background: "#f9f9f9" },
//   note: { marginTop: "5px", fontSize: "14px", color: "#555" },
//   qrImage: { width: "200px", marginTop: "10px", borderRadius: "8px" },
//   submitButton: { marginTop: "20px", padding: "12px 20px", border: "none", borderRadius: "8px", background: "#28a745", color: "#fff", fontSize: "16px", cursor: "pointer", fontWeight: "bold" },
// };
