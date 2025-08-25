// src/AddStudent.js
import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "./firebase";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = () => {
    if (!name || !email) return alert("Please fill all fields");

    const studentsRef = ref(db, "students");
    push(studentsRef, {
      name: name,
      email: email,
      joinedDate: new Date().toLocaleDateString("en-IN")
    });

    setName("");
    setEmail("");
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Student Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleAdd}>Add Student</button>
    </div>
  );
}
