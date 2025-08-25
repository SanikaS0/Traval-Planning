
// // Trips.js
// import React, { useState, useEffect } from "react";
// import { db } from "./firebase";
// import { ref, push, onValue, remove } from "firebase/database";
// import Side from "./Side";
// import "./Trip.css";

// export default function Trips() {
//   const [trips, setTrips] = useState([]);
//   const [newTrip, setNewTrip] = useState({
//     name: "",
//     destination: "",
//     price: "",
//     duration: "",
//     status: "Active",
//     imageUrl: "",
//   });

//   // Load trips from Firebase
//   useEffect(() => {
//     const tripsRef = ref(db, "trips");
//     onValue(tripsRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const loadedTrips = Object.entries(data).map(([id, trip]) => ({
//           id,
//           ...trip,
//         }));
//         setTrips(loadedTrips);
//       } else {
//         setTrips([]);
//       }
//     });
//   }, []);

//   // Handle input
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewTrip((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Add new trip
//   const handleAddTrip = (e) => {
//     e.preventDefault();
//     if (!newTrip.name || !newTrip.destination || !newTrip.price) {
//       alert("Please fill required fields");
//       return;
//     }

//     const tripsRef = ref(db, "trips");
//     push(tripsRef, {
//       ...newTrip,
//       price: parseInt(newTrip.price, 10),
//     });

//     setNewTrip({
//       name: "",
//       destination: "",
//       price: "",
//       duration: "",
//       status: "Active",
//       imageUrl: "",
//     });
//   };

//   // Delete trip
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this trip?")) {
//       remove(ref(db, `trips/${id}`));
//     }
//   };

//   return (
//     <div className="trips-wrapper">
//       <Side />
//       <h2 className="trips-title">🌍 Trip Management</h2>

//       {/* Add Trip Form */}
//       <div className="add-trip-form">
//         <h3>Add New Trip (Admin)</h3>
//         <form onSubmit={handleAddTrip}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Trip Name"
//             value={newTrip.name}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="destination"
//             placeholder="Destination"
//             value={newTrip.destination}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="number"
//             name="price"
//             placeholder="Price (₹)"
//             value={newTrip.price}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="duration"
//             placeholder="Duration (e.g. 5 Days)"
//             value={newTrip.duration}
//             onChange={handleChange}
//           />
//           <select
//             name="status"
//             value={newTrip.status}
//             onChange={handleChange}
//           >
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//           </select>
//           <input
//             type="text"
//             name="imageUrl"
//             placeholder="Image URL"
//             value={newTrip.imageUrl}
//             onChange={handleChange}
//           />
//           <button type="submit">➕ Add Trip</button>
//         </form>
//       </div>

//       {/* Trips List */}
//       <div className="trip-tree">
//         {trips.map((trip) => (
//           <div key={trip.id} className="trip-node">
//             <div className="trip-main">
//               <span className="trip-name">{trip.name}</span>
//               <button
//                 className="delete-btn"
//                 onClick={() => handleDelete(trip.id)}
//               >
//                 ❌ Delete
//               </button>
//             </div>
//             <div className="trip-details">
//               {trip.imageUrl && (
//                 <img
//                   src={trip.imageUrl}
//                   alt={trip.name}
//                   className="trip-image"
//                 />
//               )}
//               <p><strong>Destination:</strong> {trip.destination}</p>
//               <p><strong>Duration:</strong> {trip.duration}</p>
//               <p><strong>Price:</strong> ₹{trip.price.toLocaleString()}</p>
//               <p>
//                 <strong>Status:</strong>{" "}
//                 <span className={`status-badge ${trip.status.toLowerCase()}`}>
//                   {trip.status}
//                 </span>
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }













// Trips.js
import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { ref, push, onValue } from "firebase/database";
import Side from "./Side";
import "./Trip.css";

export default function Trips() {
  const [trips, setTrips] = useState([]);
  const [newTrip, setNewTrip] = useState({
    name: "",
    destination: "",
    price: "",
    duration: "",
    status: "Active",
    imageUrl: "",
  });

  // Load trips from Firebase
  useEffect(() => {
    const tripsRef = ref(db, "trips");
    onValue(tripsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedTrips = Object.entries(data).map(([id, trip]) => ({
          id,
          ...trip,
        }));
        setTrips(loadedTrips); // 🔹 सर्व trips load करून ठेवतो
      }
    });
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTrip((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add new trip
  const handleAddTrip = (e) => {
    e.preventDefault();
    if (!newTrip.name || !newTrip.destination || !newTrip.price) {
      alert("Please fill required fields");
      return;
    }

    const tripsRef = ref(db, "trips");
    push(tripsRef, {
      ...newTrip,
      price: parseInt(newTrip.price, 10),
    });

    // 🔹 फॉर्म रिकामा करा पण जुनी trips delete करू नकोस
    setNewTrip({
      name: "",
      destination: "",
      price: "",
      duration: "",
      status: "Active",
      imageUrl: "",
    });
  };

  return (
    <div className="trips-wrapper">
      <Side />
      <h2 className="trips-title">🌍 Trip Management</h2>

      {/* Add Trip Form */}
      <div className="add-trip-form">
        <h3>Add New Trip (Admin)</h3>
        <form onSubmit={handleAddTrip}>
          <input
            type="text"
            name="name"
            placeholder="Trip Name"
            value={newTrip.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            value={newTrip.destination}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price (₹)"
            value={newTrip.price}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="duration"
            placeholder="Duration (e.g. 5 Days)"
            value={newTrip.duration}
            onChange={handleChange}
          />
          <select
            name="status"
            value={newTrip.status}
            onChange={handleChange}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={newTrip.imageUrl}
            onChange={handleChange}
          />
          <button type="submit">➕ Add Trip</button>
        </form>
      </div>

      {/* Trips List */}
      <div className="trip-tree">
        {trips.map((trip) => (
          <div key={trip.id} className="trip-node">
            <div className="trip-main">
              <span className="trip-name">{trip.name}</span>
            </div>
            <div className="trip-details">
              {trip.imageUrl && (
                <img
                  src={trip.imageUrl}
                  alt={trip.name}
                  className="trip-image"
                />
              )}
              <p><strong>Destination:</strong> {trip.destination}</p>
              <p><strong>Duration:</strong> {trip.duration}</p>
              <p><strong>Price:</strong> ₹{trip.price.toLocaleString()}</p>
              <p>
                <strong>Status:</strong>
                <span className={`status-badge ${trip.status.toLowerCase()}`}>
                  {trip.status}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
