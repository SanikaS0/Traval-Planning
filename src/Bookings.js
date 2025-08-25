// import React, { useState } from "react";
// import Side from "./Side";

// export default function Bookings() {
//   const [search, setSearch] = useState("");
//   const [selectedBooking, setSelectedBooking] = useState(null);
//   const [bookings, setBookings] = useState([]);

//   // Form state
//   const [user, setUser] = useState("");
//   const [destination, setDestination] = useState("");
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [status, setStatus] = useState("Pending");

//   // Add new booking locally
//   const addBooking = (e) => {
//     e.preventDefault();
//     if (!user || !destination || !startDate || !endDate) {
//       alert("Please fill all fields!");
//       return;
//     }

//     // Optional: Validate startDate <= endDate
//     if (new Date(startDate) > new Date(endDate)) {
//       alert("Ending date cannot be before starting date!");
//       return;
//     }

//     const newBooking = {
//       id: Date.now().toString(),
//       user,
//       destination,
//       startDate,
//       endDate,
//       status,
//     };

//     setBookings([newBooking, ...bookings]); // Add new booking on top

//     // Reset form
//     setUser("");
//     setDestination("");
//     setStartDate("");
//     setEndDate("");
//     setStatus("Pending");
//   };

//   const filteredBookings = bookings.filter(
//     (b) =>
//       b.user.toLowerCase().includes(search.toLowerCase()) ||
//       b.destination.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="bookings-page">
//       <Side />
//       <h1>Bookings</h1>

//       {/* Search Bar */}
//       <input
//         type="text"
//         className="search-bar"
//         placeholder="Search bookings..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* Add Booking Form */}
//       <form className="booking-form" onSubmit={addBooking}>
//         <input
//           type="text"
//           placeholder="User Name"
//           value={user}
//           onChange={(e) => setUser(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Destination"
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//         />
//         <input
//           type="date"  // Starting date calendar
//           placeholder="Start Date"
//           value={startDate}
//           onChange={(e) => setStartDate(e.target.value)}
//         />
//         <input
//           type="date"  // Ending date calendar
//           placeholder="End Date"
//           value={endDate}
//           onChange={(e) => setEndDate(e.target.value)}
//         />
//         <select value={status} onChange={(e) => setStatus(e.target.value)}>
//           <option value="Pending">Pending</option>
//           <option value="Confirmed">Confirmed</option>
//           <option value="Cancelled">Cancelled</option>
//         </select>
//         <button type="submit">➕ Add Booking</button>
//       </form>

//       {/* Table */}
//       <div className="table-container">
//         <table className="bookings-table">
//           <thead>
//             <tr>
//               <th>Sr. No.</th>
//               <th>User</th>
//               <th>Destination</th>
//               <th>Start Date</th>
//               <th>End Date</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredBookings.length > 0 ? (
//               filteredBookings.map((b, index) => (
//                 <tr key={b.id} onClick={() => setSelectedBooking(b)}>
//                   <td>{index + 1}</td>
//                   <td>{b.user}</td>
//                   <td>{b.destination}</td>
//                   <td>{b.startDate}</td>
//                   <td>{b.endDate}</td>
//                   <td>
//                     <span className={`status ${b.status.toLowerCase()}`}>
//                       {b.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6">No bookings found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal */}
//       {selectedBooking && (
//         <div
//           className="modal-overlay"
//           onClick={() => setSelectedBooking(null)}
//         >
//           <div
//             className="modal-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2>Booking Details</h2>
//             <p>
//               <strong>User:</strong> {selectedBooking.user}
//             </p>
//             <p>
//               <strong>Destination:</strong> {selectedBooking.destination}
//             </p>
//             <p>
//               <strong>Start Date:</strong> {selectedBooking.startDate}
//             </p>
//             <p>
//               <strong>End Date:</strong> {selectedBooking.endDate}
//             </p>
//             <p>
//               <strong>Status:</strong> {selectedBooking.status}
//             </p>
//             <button onClick={() => setSelectedBooking(null)}>Close</button>
//           </div>
//         </div>
//       )}

//       {/* CSS */}
//       <style>{`
//         .bookings-page {
//           padding: 20px;
//           font-family: Arial, sans-serif;
//           background: #f9fafc;
//           min-height: 100vh;
//           text-align: center;
//           margin-left:250px;
//         }
//         h1 { color: #333; margin-bottom: 20px; }
//         .search-bar {
//           padding: 10px;
//           width: 100%;
//           max-width: 400px;
//           margin-bottom: 20px;
//           border-radius: 6px;
//           border: 1px solid #ccc;
//         }
//         .booking-form {
//           margin: 20px auto;
//           display: flex;
//           gap: 10px;
//           justify-content: center;
//           flex-wrap: wrap;
//         }
//         .booking-form input, .booking-form select {
//           padding: 8px;
//           border: 1px solid #ccc;
//           border-radius: 6px;
//         }
//         .booking-form button {
//           padding: 8px 15px;
//           border: none;
//           background: #007bff;
//           color: white;
//           border-radius: 6px;
//           cursor: pointer;
//         }
//         .booking-form button:hover {
//           background: #0056b3;
//         }
//         .table-container {
//           display: flex;
//           justify-content: center;
//           margin-top: 20px;
//         }
//         .bookings-table {
//           width: 90%;
//           border-collapse: collapse;
//           background: white;
//           border-radius: 8px;
//           overflow: hidden;
//           box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
//         }
//         .bookings-table th, .bookings-table td {
//           padding: 12px 15px;
//           text-align: left;
//           border-bottom: 1px solid #eee;
//         }
//         .bookings-table th {
//           background: #007bff;
//           color: white;
//         }
//         .bookings-table tr:hover {
//           background: #f1f7ff;
//           cursor: pointer;
//         }
//         .status {
//           padding: 5px 10px;
//           border-radius: 6px;
//           font-weight: bold;
//         }
//         .status.confirmed { background: #d4edda; color: #155724; }
//         .status.pending { background: #fff3cd; color: #856404; }
//         .status.cancelled { background: #f8d7da; color: #721c24; }
//         .modal-overlay {
//           position: fixed;
//           top: 0; left: 0;
//           width: 100%; height: 100%;
//           background: rgba(0,0,0,0.5);
//           display: flex; align-items: center; justify-content: center;
//         }
//         .modal-content {
//           background: white;
//           padding: 20px;
//           border-radius: 8px;
//           max-width: 400px;
//           width: 100%;
//           box-shadow: 0 4px 15px rgba(0,0,0,0.2);
//         }
//         .modal-content h2 { margin-top: 0; }
//         .modal-content button {
//           margin-top: 15px;
//           padding: 10px 20px;
//           border: none;
//           background: #007bff;
//           color: white;
//           border-radius: 6px;
//           cursor: pointer;
//         }
//         .modal-content button:hover { background: #0056b3; }
//       `}</style>
//     </div>
//   );
// }






import React, { useState } from "react";
import Side from "./Side";

export default function Bookings() {
  const [search, setSearch] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [bookings, setBookings] = useState([]);

  // Form state
  const [user, setUser] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("Pending");

  const addBooking = (e) => {
    e.preventDefault();
    if (!user || !destination || !startDate || !endDate) {
      alert("Please fill all fields!");
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      alert("Ending date cannot be before starting date!");
      return;
    }

    const newBooking = {
      id: Date.now().toString(),
      user,
      destination,
      startDate,
      endDate,
      status,
    };

    setBookings([newBooking, ...bookings]);

    setUser("");
    setDestination("");
    setStartDate("");
    setEndDate("");
    setStatus("Pending");
  };

  const filteredBookings = bookings.filter(
    (b) =>
      b.user.toLowerCase().includes(search.toLowerCase()) ||
      b.destination.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bookings-page">
      <Side />
      <h1>Bookings</h1>

      {/* Search Bar */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search bookings..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Add Booking Form */}
      <form className="booking-form" onSubmit={addBooking}>
        <input
          type="text"
          placeholder="User Name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <button type="submit">➕ Add Booking</button>
      </form>

      {/* Table */}
      <div className="table-container">
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>User</th>
              <th>Destination</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((b, index) => (
                <tr key={b.id} onClick={() => setSelectedBooking(b)}>
                  <td>{index + 1}</td>
                  <td>{b.user}</td>
                  <td>{b.destination}</td>
                  <td>{b.startDate}</td>
                  <td>{b.endDate}</td>
                  <td>
                    <span className={`status ${b.status.toLowerCase()}`}>
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No bookings found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedBooking && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedBooking(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Booking Details</h2>
            <p>
              <strong>User:</strong> {selectedBooking.user}
            </p>
            <p>
              <strong>Destination:</strong> {selectedBooking.destination}
            </p>
            <p>
              <strong>Start Date:</strong> {selectedBooking.startDate}
            </p>
            <p>
              <strong>End Date:</strong> {selectedBooking.endDate}
            </p>
            <p>
              <strong>Status:</strong> {selectedBooking.status}
            </p>
            <button onClick={() => setSelectedBooking(null)}>Close</button>
          </div>
        </div>
      )}

      {/* CSS */}
      <style>{`
        .bookings-page {
          padding: 20px;
          font-family: Arial, sans-serif;
          background: #f9fafc;
          min-height: 100vh;
          text-align: center;
          margin-left: 250px;
          transition: margin-left 0.3s ease;
        }

        h1 { color: #333; margin-bottom: 20px; }

        .search-bar {
          padding: 10px;
          width: 100%;
          max-width: 400px;
          margin-bottom: 20px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        .booking-form {
          margin: 20px auto;
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .booking-form input, .booking-form select {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 6px;
        }

        .booking-form button {
          padding: 8px 15px;
          border: none;
          background: #007bff;
          color: white;
          border-radius: 6px;
          cursor: pointer;
        }

        .booking-form button:hover { background: #0056b3; }

        .table-container {
          display: flex;
          justify-content: center;
          margin-top: 20px;
          overflow-x: auto;
        }

        .bookings-table {
          width: 100%;
          max-width: 900px;
          border-collapse: collapse;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
        }

        .bookings-table th, .bookings-table td {
          padding: 12px 15px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }

        .bookings-table th { background: #007bff; color: white; }

        .bookings-table tr:hover { background: #f1f7ff; cursor: pointer; }

        .status {
          padding: 5px 10px;
          border-radius: 6px;
          font-weight: bold;
        }

        .status.confirmed { background: #d4edda; color: #155724; }
        .status.pending { background: #fff3cd; color: #856404; }
        .status.cancelled { background: #f8d7da; color: #721c24; }

        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.5);
          display: flex; align-items: center; justify-content: center;
          padding: 10px;
        }

        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          max-width: 400px;
          width: 100%;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .modal-content h2 { margin-top: 0; }

        .modal-content button {
          margin-top: 15px;
          padding: 10px 20px;
          border: none;
          background: #007bff;
          color: white;
          border-radius: 6px;
          cursor: pointer;
        }

        .modal-content button:hover { background: #0056b3; }

        /* Responsive */
        @media (max-width: 1024px) {
          .bookings-page { margin-left: 200px; }
        }

        @media (max-width: 768px) {
          .bookings-page { margin-left: 0; padding: 15px; }
          .booking-form { flex-direction: column; align-items: stretch; }
          .bookings-table th, .bookings-table td { padding: 10px; font-size: 14px; }
        }

        @media (max-width: 480px) {
          .bookings-table { font-size: 12px; }
          .booking-form input, .booking-form select, .booking-form button { font-size: 14px; }
        }
      `}</style>
    </div>
  );
}
