import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FaHome,
  FaWallet,
  FaBoxOpen,
  FaMapMarkedAlt,
  FaPlane,
  FaSlidersH,
  FaSignOutAlt
} from 'react-icons/fa'; 
import { signOut } from "firebase/auth";
import { auth } from "./firebase";  
import './App.css';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="sidebar">
      {/* Sidebar Title */}
      <h2 className="sidebar-title">User Dashboard</h2>

      {/* Navigation */}
      <ul className="sidebar-nav">
        <li className={location.pathname === "/dashboard" ? "active" : ""}>
          <Link to="/dashboard"><FaHome /> Dashboard</Link>
        </li>

        <li className={location.pathname === "/budget" ? "active" : ""}>
          <Link to="/budget"><FaWallet /> Budget</Link>
        </li>

        <li className={location.pathname === "/packing" ? "active" : ""}>
          <Link to="/packing"><FaBoxOpen /> Packing List</Link>
        </li>

        <li className={location.pathname === "/destinations" ? "active" : ""}>
          <Link to="/destinations"><FaMapMarkedAlt /> Destinations</Link>
        </li>

        <li className={location.pathname === "/my-bookings" ? "active" : ""}>
          <Link to="/MyBooking"><FaPlane /> My Bookings</Link>
        </li>

        <li className={location.pathname === "/setting" ? "active" : ""}>
          <Link to="/setting"><FaSlidersH /> Settings</Link>
        </li>
      </ul>

      {/* Logout Button at bottom */}
      <button className="logout-btn-bottom" onClick={handleLogout}>
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
};

export default Sidebar;






// import React, { useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import {
//   FaHome,
//   FaWallet,
//   FaBoxOpen,
//   FaMapMarkedAlt,
//   FaPlane,
//   FaSlidersH,
//   FaSignOutAlt,
//   FaBars,
// } from 'react-icons/fa';
// import { signOut } from "firebase/auth";
// import { auth } from "./firebase";
// import './App.css';

// const Sidebar = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [isOpen, setIsOpen] = useState(false);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       navigate("/login");
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };

//   // Toggle sidebar open/closed
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <>
//       {/* Hamburger toggle button visible on mobile */}
//       <button className="hamburger-btn" onClick={toggleSidebar}>
//         <FaBars />
//       </button>

//       <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
//         <h2 className="sidebar-title">User Dashboard</h2>

//         <ul className="sidebar-nav">
//           <li className={location.pathname === "/dashboard" ? "active" : ""}>
//             <Link to="/dashboard"><FaHome /> Dashboard</Link>
//           </li>
//           <li className={location.pathname === "/budget" ? "active" : ""}>
//             <Link to="/budget"><FaWallet /> Budget</Link>
//           </li>
//           <li className={location.pathname === "/packing" ? "active" : ""}>
//             <Link to="/packing"><FaBoxOpen /> Packing List</Link>
//           </li>
//           <li className={location.pathname === "/destinations" ? "active" : ""}>
//             <Link to="/destinations"><FaMapMarkedAlt /> Destinations</Link>
//           </li>
//           <li className={location.pathname === "/my-bookings" ? "active" : ""}>
//             <Link to="/MyBooking"><FaPlane /> My Bookings</Link>
//           </li>
//           <li className={location.pathname === "/setting" ? "active" : ""}>
//             <Link to="/setting"><FaSlidersH /> Settings</Link>
//           </li>
//         </ul>

//         <button className="logout-btn-bottom" onClick={handleLogout}>
//           <FaSignOutAlt /> Logout
//         </button>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
