

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Plane,
  Hotel,
  FileText,
  Settings,
  LogOut,
} from "lucide-react"; // Modern icons
import "./Side.css";

const menuLinks = [
  { title: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/admindashboard" },
  { title: "Users", icon: <Users size={20} />, path: "/TotalUsers" },
  { title: "Trips", icon: <Plane size={20} />, path: "/trip" },
  { title: "Bookings", icon: <Hotel size={20} />, path: "/bookings" },
  { title: "Reports", icon: <FileText size={20} />, path: "/Reports" },
  { title: "Settings", icon: <Settings size={20} />, path: "/settingg" },
];

export default function Side() {
  const navigate = useNavigate();

  const handleMenuClick = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    // Example: Clear localStorage or auth state
    localStorage.clear();
    navigate("/login"); // redirect to login page
  };

  return (
    <aside className="admin-sidebar">
      <div className="sidebar-logo">
        <span id="Travel_Admin">Travel Admin</span>
      </div>

      <nav className="menu-links">
        {menuLinks.map((link, i) => (
          <div
            key={i}
            className="sidebar-link"
            onClick={() => handleMenuClick(link.path)}
          >
            <span className="sidebar-icon">{link.icon}</span>
            <span className="sidebar-text">{link.title}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-logout" onClick={handleLogout}>
        <span className="sidebar-icon">
          <LogOut size={20} />
        </span>
        <span className="sidebar-text">Logout</span>
      </div>
    </aside>
  );
}
