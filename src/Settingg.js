// import React, { useState } from "react";
// import Side from './Side';

// export default function Settings() {
//   const [username, setUsername] = useState("John Doe");
//   const [email, setEmail] = useState("john@example.com");
//   const [theme, setTheme] = useState("light");
//   const [notifications, setNotifications] = useState(true);
//   const [language, setLanguage] = useState("English");

//   const handleSave = () => {
//     alert("Settings saved successfully!");
//     console.log({ username, email, theme, notifications, language });
//   };

//   const handleReset = () => {
//     setUsername("John Doe");
//     setEmail("john@example.com");
//     setTheme("light");
//     setNotifications(true);
//     setLanguage("English");
//     alert("Settings reset to default!");
//   };

//   const styles = {
//     wrapper: {
//       padding: "30px",
//       display: "flex",
//       justifyContent: "center",
//     },
//     card: {
//       background: "white",
//       padding: "25px",
//       borderRadius: "12px",
//       boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
//       width: "400px",
//     },
//     title: {
//       color: "#1976d2",
//       marginBottom: "20px",
//       textAlign: "center",
//       cursor: "pointer",
//       fontWeight: "600",
//     },
//     label: {
//       display: "block",
//       fontWeight: "bold",
//       margin: "10px 0 5px",
//     },
//     input: {
//       width: "100%",
//       padding: "8px",
//       marginBottom: "15px",
//       border: "1px solid #ccc",
//       borderRadius: "6px",
//     },
//     button: {
//       backgroundColor: "#1976d2",
//       color: "white",
//       padding: "10px",
//       width: "100%",
//       border: "none",
//       borderRadius: "6px",
//       cursor: "pointer",
//       fontSize: "16px",
//       fontWeight: "500",
//     },
//     hint: {
//       fontSize: "12px",
//       color: "gray",
//       marginTop: "-8px",
//       marginBottom: "10px",
//     },
//   };

//   return (
//     <div style={styles.wrapper}>
//       <Side />
//       <div style={styles.card}>
//         <h2
//           style={styles.title}
//           onDoubleClick={handleReset}
//           onMouseEnter={(e) => (e.target.style.color = "#125a9c")}
//           onMouseLeave={(e) => (e.target.style.color = "#1976d2")}
//         >
//           User Settings
//         </h2>

//         <label style={styles.label}>Username:</label>
//         <input
//           style={styles.input}
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           onFocus={(e) => (e.target.style.border = "2px solid #1976d2")}
//           onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
//         />
//         <p style={styles.hint}>Enter your display name</p>

//         <label style={styles.label}>Email:</label>
//         <input
//           style={styles.input}
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           onFocus={(e) => (e.target.style.border = "2px solid #1976d2")}
//           onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
//         />

//         <label style={styles.label}>Theme:</label>
//         <select
//           style={styles.input}
//           value={theme}
//           onChange={(e) => setTheme(e.target.value)}
//         >
//           <option value="light">Light</option>
//           <option value="dark">Dark</option>
//         </select>

//         <label style={styles.label}>
//           <input
//             type="checkbox"
//             checked={notifications}
//             onChange={(e) => setNotifications(e.target.checked)}
//           />
//           Enable Notifications
//         </label>

//         <label style={styles.label}>Language:</label>
//         <select
//           style={styles.input}
//           value={language}
//           onChange={(e) => setLanguage(e.target.value)}
//         >
//           <option value="English">English</option>
//           <option value="Hindi">Hindi</option>
//           <option value="French">French</option>
//           <option value="Spanish">Spanish</option>
//         </select>

//         <button
//           style={styles.button}
//           onMouseOver={(e) => (e.target.style.backgroundColor = "#125a9c")}
//           onMouseOut={(e) => (e.target.style.backgroundColor = "#1976d2")}
//           onClick={handleSave}
//         >
//           Save Changes
//         </button>
//       </div>
//     </div>
//   );
// }







import React, { useState } from "react";
import Side from './Side';

export default function Settings() {
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");

  const handleSave = () => {
    alert("Settings saved successfully!");
    console.log({ username, email, theme, notifications, language });
  };

  const handleReset = () => {
    setUsername("John Doe");
    setEmail("john@example.com");
    setTheme("light");
    setNotifications(true);
    setLanguage("English");
    alert("Settings reset to default!");
  };

  const styles = {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      padding: "30px",
      flexWrap: "wrap", // responsive wrap for mobile
    },
    card: {
      background: "white",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      width: "400px",
      maxWidth: "100%", // responsive width
      margin: "10px",
    },
    title: {
      color: "#1976d2",
      marginBottom: "20px",
      textAlign: "center",
      cursor: "pointer",
      fontWeight: "600",
    },
    label: {
      display: "block",
      fontWeight: "bold",
      margin: "10px 0 5px",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      boxSizing: "border-box",
    },
    button: {
      backgroundColor: "#1976d2",
      color: "white",
      padding: "10px",
      width: "100%",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "500",
    },
    hint: {
      fontSize: "12px",
      color: "gray",
      marginTop: "-8px",
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.wrapper}>
      <Side />
      <div style={styles.card}>
        <h2
          style={styles.title}
          onDoubleClick={handleReset}
          onMouseEnter={(e) => (e.target.style.color = "#125a9c")}
          onMouseLeave={(e) => (e.target.style.color = "#1976d2")}
        >
          User Settings
        </h2>

        <label style={styles.label}>Username:</label>
        <input
          style={styles.input}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onFocus={(e) => (e.target.style.border = "2px solid #1976d2")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
        />
        <p style={styles.hint}>Enter your display name</p>

        <label style={styles.label}>Email:</label>
        <input
          style={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={(e) => (e.target.style.border = "2px solid #1976d2")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
        />

        <label style={styles.label}>Theme:</label>
        <select
          style={styles.input}
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>

        <label style={styles.label}>
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
          Enable Notifications
        </label>

        <label style={styles.label}>Language:</label>
        <select
          style={styles.input}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="French">French</option>
          <option value="Spanish">Spanish</option>
        </select>

        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#125a9c")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#1976d2")}
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
