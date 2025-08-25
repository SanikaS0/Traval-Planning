
// import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { ref, update } from 'firebase/database';
// import { auth, db } from './firebase';
// import { useNavigate, Link } from 'react-router-dom';
// import './login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // ✅ Update only email/lastLogin instead of overwriting full data
//       await update(ref(db, 'users/' + user.uid), {
//         email: user.email,
//         lastLogin: new Date().toISOString()
//       });

//       alert("✅ Login successful!!");
//       navigate('/dashboard');
//     } catch (err) {
//       console.error("Login error:", err);
//       if (err.code === "auth/invalid-credential") {
//         setError("Invalid email or password.");
//       } else if (err.code === "auth/network-request-failed") {
//         setError("Network error. Please check your connection.");
//       } else {
//         setError(err.message);
//       }
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-card">
//         <h2 className="login-title">🔐 Login</h2>
//         <form onSubmit={handleLogin} className="login-form">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="login-input"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="login-input"
//           />
//           {error && <div className="login-error">{error}</div>}
//           <button type="submit" className="login-button">Login</button>
//         </form>
//         <p className="login-helperText">
//           Don’t have an account? <Link to="/register" className="login-link">Register here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;






import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref, update } from 'firebase/database';  // ✅ set → update
import { auth, db } from './firebase';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Aadicha data delete honar nahi
      await update(ref(db, 'users/' + user.uid), {
        email: user.email,
        lastLogin: new Date().toISOString()
      });

      alert("✅ Login successful!!");
      navigate('/dashboard');
    } catch (err) {
      console.error("Login error:", err);
      if (err.code === "auth/invalid-credential") {
        setError("Invalid email or password.");
      } else if (err.code === "auth/network-request-failed") {
        setError("Network error. Please check your connection.");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">🔐 Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          {error && <div className="login-error">{error}</div>}
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="login-helperText">
          Don’t have an account? <Link to="/register" className="login-link">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
