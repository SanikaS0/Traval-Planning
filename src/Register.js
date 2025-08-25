// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth, db } from './firebase';  
// import { useNavigate, Link } from 'react-router-dom';
// import { ref, set } from 'firebase/database';
// import './register.css';

// const Register = () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [address, setAddress] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError('');

//     // ✅ Validate passwords match
//     if (password !== confirmPassword) {
//       setError('Passwords do not match.');
//       return;
//     }

//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // ✅ Save user details in Realtime Database
//       await set(ref(db, 'users/' + user.uid), {
//         fullName: fullName,
//         email: email,
//         mobile: mobile,
//         address: address,
//         createdAt: new Date().toISOString()
//       });

//       alert("✅ Registration successful!");
//       navigate('/login');
//     } catch (err) {
//       console.error("Registration error:", err);
//       if (err.code === 'auth/email-already-in-use') {
//         setError('This email is already in use.');
//       } else if (err.code === 'auth/weak-password') {
//         setError('Password should be at least 6 characters.');
//       } else {
//         setError(err.message);
//       }
//     }
//   };

//   return (
//     <div className="wrapper">
//       <div className="card">
//         <h2 className="title">📝 Register</h2>
//         <form onSubmit={handleRegister} className="form">
//           <input
//             type="text"
//             placeholder="Full Name"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             required
//             className="input"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="input"
//           />
//           <input
//             type="text"
//             placeholder="Mobile Number"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             required
//             className="input"
//           />
//           <input
//             type="text"
//             placeholder="Address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             required
//             className="input"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="input"
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//             className="input"
//           />
//           {error && <div className="error">{error}</div>}
//           <button type="submit" className="btn btn--register">Register</button>
//         </form>
//         <p className="helperText">
//           Already have an account? <Link to="/login" className="link">Login here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;












// import React, { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "./firebase";
// import { useNavigate, Link } from "react-router-dom";
// import { ref, push } from "firebase/database"; 
// import "./register.css";

// const Register = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [address, setAddress] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError("");

//     if (password !== confirmPassword) {
//       setError("❌ Passwords do not match.");
//       return;
//     }

//     try {
//       // Create user in Firebase Authentication
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const user = userCredential.user;

//       // Append user data (push ensures multiple entries, not overwrite)
//       await push(ref(db, "users"), {
//         uid: user.uid,
//         fullName,
//         email,
//         mobile,
//         address,
//       });

//       alert("✅ Registration successful!");
//       navigate("/login");
//     } catch (err) {
//       console.error("Registration error:", err);
//       if (err.code === "auth/email-already-in-use") {
//         setError("❌ This email is already in use.");
//       } else if (err.code === "auth/weak-password") {
//         setError("❌ Password should be at least 6 characters.");
//       } else {
//         setError(err.message);
//       }
//     }
//   };

//   return (
//     <div className="wrapper">
//       <div className="card">
//         <h2 className="title">📝 Register</h2>
//         <form onSubmit={handleRegister} className="form">
//           <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required className="input"/>
//           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input"/>
//           <input type="text" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} required className="input"/>
//           <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required className="input"/>
//           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input"/>
//           <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="input"/>

//           {error && <div className="error">{error}</div>}

//           <button type="submit" className="btn btn--register">Register</button>
//         </form>

//         <p className="helperText">
//           Already have an account?{" "}
//           <Link to="/login" className="link">Login here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;






// src/Register.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { useNavigate, Link } from "react-router-dom";
import { ref, set } from "firebase/database";
import "./register.css";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("❌ Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
      const user = userCredential.user;

      await set(ref(db, `users/${user.uid}`), {
        fullName: fullName.trim(),
        email: email.trim(),
        mobile: mobile.trim(),
        address: address.trim(),
      });

      alert("✅ Registration successful!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") setError("❌ Email already in use.");
      else if (err.code === "auth/weak-password") setError("❌ Password must be at least 6 characters.");
      else setError(err.message);
    }
  };

  return (
    <div className="wrapper">
      <div className="card">
        <h2 className="title">📝 Register</h2>
        <form onSubmit={handleRegister} className="form">
          <input type="text" placeholder="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} required className="input"/>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="input"/>
          <input type="text" placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} required className="input"/>
          <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} required className="input"/>
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="input"/>
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required className="input"/>
          {error && <div className="error">{error}</div>}
          <button type="submit" className="btn btn--register">Register</button>
        </form>
        <p className="helperText">Already have an account? <Link to="/login" className="link">Login here</Link></p>
      </div>
    </div>
  );
};

export default Register;
