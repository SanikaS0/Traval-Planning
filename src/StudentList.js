// src/StudentList.js
import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "./firebase";

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const studentsRef = ref(db, "students");
    onValue(studentsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const studentArray = Object.keys(data).map((id) => ({
          id,
          ...data[id]
        }));
        setStudents(studentArray);
      } else {
        setStudents([]);
      }
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Email</th>
          <th>Joined Date</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.joinedDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
