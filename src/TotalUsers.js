import React, { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ref, get } from "firebase/database";
import Side from "./Side";
import "./TotalUsers.css";

export default function TotalUsers() {
  const [currentUser, setCurrentUser] = useState(null);
  const [usersList, setUsersList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        const usersRef = ref(db, "users");
        get(usersRef).then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            const list = Object.keys(data).map((key, index) => ({
              id: key,
              srNo: index + 1,
              ...data[key],
            }));
            setUsersList(list);
          } else {
            setUsersList([]);
          }
        });
      } else {
        setUsersList([]);
      }
    });

    return () => unsub();
  }, []);

  if (!currentUser) {
    return (
      <div className="users-container" style={{ padding: "20px" }}>
        <h2>Please login to see the users.</h2>
      </div>
    );
  }

  // Filter users based on search input
  const filteredUsers = usersList.filter(
    (user) =>
      user.fullName?.toLowerCase().includes(search.toLowerCase()) ||
      user.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="users-layout">
      {/* Sidebar */}
      <Side />

      {/* Main content */}
      <div className="users-container">
        <div className="users-header">
          <h2>Registered Users</h2>

          {/* 🔍 Searchbar on right side */}
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
        </div>

        <table className="users-table">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.srNo}</td>
                <td>{user.fullName || "N/A"}</td>
                <td>{user.email || "N/A"}</td>
                <td>{user.mobile || "N/A"}</td>
                <td>{user.address || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
