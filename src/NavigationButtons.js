// src/NavigationButtons.js
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavigationButtons() {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "#0077ff",
          color: "#fff",
          padding: "10px 15px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ⬅ Back
      </button>

      {/* Close button */}
      <button
        onClick={() => navigate("/")}
        style={{
          background: "#ff4444",
          color: "#fff",
          padding: "10px 15px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        ✖ Close
      </button>
    </div>
  );
}
