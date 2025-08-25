// import React, { useState, useEffect } from "react";
// import Sidebar from "./Sidebar";

// export default function Settings() {
//   const [username, setUsername] = useState("John Doe");
//   const [email, setEmail] = useState("john@example.com");
//   const [theme, setTheme] = useState("light");
//   const [notifications, setNotifications] = useState(true);
//   const [language, setLanguage] = useState("English");
//   const [fontSize, setFontSize] = useState("medium");
//   const [profileVisible, setProfileVisible] = useState(true);
//   const [timezone, setTimezone] = useState("GMT");

//   // Apply theme instantly
//   useEffect(() => {
//     if (theme === "dark") {
//       document.body.style.backgroundColor = "#121212";
//       document.body.style.color = "#fff";
//     } else {
//       document.body.style.backgroundColor = "#fff";
//       document.body.style.color = "#000";
//     }
//   }, [theme]);

//   const handleSave = () => {
//     alert(`Settings Saved!
// Username: ${username}
// Email: ${email}
// Theme: ${theme}
// Notifications: ${notifications ? "On" : "Off"}
// Language: ${language}
// Font Size: ${fontSize}
// Profile Visible: ${profileVisible ? "Yes" : "No"}
// Timezone: ${timezone}`);
//   };

//   const handleReset = () => {
//     setUsername("John Doe");
//     setEmail("john@example.com");
//     setTheme("light");
//     setNotifications(true);
//     setLanguage("English");
//     setFontSize("medium");
//     setProfileVisible(true);
//     setTimezone("GMT");
//   };

//   // Dynamic dark/light styles for container
//   const containerStyle = {
//     ...styles.container,
//     backgroundColor: theme === "dark" ? "#1e1e1e" : "#f9f9f9",
//     color: theme === "dark" ? "#fff" : "#000",
//     border: theme === "dark" ? "1px solid #444" : "1px solid #ccc"
//   };

//   const inputStyle = {
//     ...styles.input,
//     backgroundColor: theme === "dark" ? "#2c2c2c" : "#fff",
//     color: theme === "dark" ? "#fff" : "#000",
//     border: theme === "dark" ? "1px solid #555" : "1px solid #ccc"
//   };

//   const selectStyle = {
//     ...styles.select,
//     backgroundColor: theme === "dark" ? "#2c2c2c" : "#fff",
//     color: theme === "dark" ? "#fff" : "#000",
//     border: theme === "dark" ? "1px solid #555" : "1px solid #ccc"
//   };

//   return (
//     <div style={containerStyle}>
//       <Sidebar />
//       <h2 style={styles.title}>Settings</h2>

//       <label style={styles.label}>Username</label>
//       <input
//         style={inputStyle}
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />

//       <label style={styles.label}>Email</label>
//       <input
//         style={inputStyle}
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <label style={styles.label}>Theme</label>
//       <select
//         style={selectStyle}
//         value={theme}
//         onChange={(e) => setTheme(e.target.value)}
//       >
//         <option value="light">Light</option>
//         <option value="dark">Dark</option>
//         <option value="system">System Default</option>
//       </select>

//       <label style={styles.label}>
//         <input
//           type="checkbox"
//           checked={notifications}
//           onChange={(e) => setNotifications(e.target.checked)}
//         />{" "}
//         Enable Notifications
//       </label>

//       <label style={styles.label}>Language</label>
//       <select
//         style={selectStyle}
//         value={language}
//         onChange={(e) => setLanguage(e.target.value)}
//       >
//         <option value="English">English</option>
//         <option value="Hindi">Hindi</option>
//         <option value="Spanish">Spanish</option>
//         <option value="French">French</option>
//       </select>

//       <label style={styles.label}>Font Size</label>
//       <select
//         style={selectStyle}
//         value={fontSize}
//         onChange={(e) => setFontSize(e.target.value)}
//       >
//         <option value="small">Small</option>
//         <option value="medium">Medium</option>
//         <option value="large">Large</option>
//       </select>

//       <label style={styles.label}>
//         <input
//           type="checkbox"
//           checked={profileVisible}
//           onChange={(e) => setProfileVisible(e.target.checked)}
//         />{" "}
//         Public Profile
//       </label>

//       <label style={styles.label}>Timezone</label>
//       <select
//         style={selectStyle}
//         value={timezone}
//         onChange={(e) => setTimezone(e.target.value)}
//       >
//         <option value="GMT">GMT</option>
//         <option value="EST">EST</option>
//         <option value="PST">PST</option>
//         <option value="IST">IST</option>
//       </select>

//       <div style={styles.buttonContainer}>
//         <button style={styles.saveBtn} onClick={handleSave}>
//           Save
//         </button>
//         <button style={styles.resetBtn} onClick={handleReset}>
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     maxWidth: "400px",
//     margin: "50px auto",
//     padding: "20px",
//     borderRadius: "8px",
//     fontFamily: "Arial, sans-serif",
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   label: {
//     display: "block",
//     margin: "10px 0 5px",
//     fontWeight: "bold",
//   },
//   input: {
//     width: "100%",
//     padding: "8px",
//     borderRadius: "4px",
//     marginBottom: "10px",
//   },
//   select: {
//     width: "100%",
//     padding: "8px",
//     borderRadius: "4px",
//     marginBottom: "10px",
//   },
//   buttonContainer: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginTop: "20px",
//   },
//   saveBtn: {
//     backgroundColor: "#4CAF50",
//     color: "white",
//     padding: "8px 15px",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
//   resetBtn: {
//     backgroundColor: "#f44336",
//     color: "white",
//     padding: "8px 15px",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
// };





import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

export default function Settings() {
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");
  const [fontSize, setFontSize] = useState("medium");
  const [profileVisible, setProfileVisible] = useState(true);
  const [timezone, setTimezone] = useState("GMT");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Apply theme instantly
  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#fff";
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  }, [theme]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSave = () => {
    alert(`Settings Saved!
Username: ${username}
Email: ${email}
Theme: ${theme}
Notifications: ${notifications ? "On" : "Off"}
Language: ${language}
Font Size: ${fontSize}
Profile Visible: ${profileVisible ? "Yes" : "No"}
Timezone: ${timezone}`);
  };

  const handleReset = () => {
    setUsername("John Doe");
    setEmail("john@example.com");
    setTheme("light");
    setNotifications(true);
    setLanguage("English");
    setFontSize("medium");
    setProfileVisible(true);
    setTimezone("GMT");
  };

  // Dynamic styles for responsiveness
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const containerStyle = {
    ...styles.container,
    maxWidth: isMobile ? "95%" : "400px",
    margin: isMobile ? "20px auto" : "50px auto",
    padding: isMobile ? "15px" : "20px",
    backgroundColor: theme === "dark" ? "#1e1e1e" : "#f9f9f9",
    color: theme === "dark" ? "#fff" : "#000",
    border: theme === "dark" ? "1px solid #444" : "1px solid #ccc",
  };

  const inputStyle = {
    ...styles.input,
    padding: isMobile ? "6px" : "8px",
    backgroundColor: theme === "dark" ? "#2c2c2c" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    border: theme === "dark" ? "1px solid #555" : "1px solid #ccc",
  };

  const selectStyle = {
    ...styles.select,
    padding: isMobile ? "6px" : "8px",
    backgroundColor: theme === "dark" ? "#2c2c2c" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    border: theme === "dark" ? "1px solid #555" : "1px solid #ccc",
  };

  const buttonContainerStyle = {
    ...styles.buttonContainer,
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? "10px" : "0",
  };

  const saveBtnStyle = {
    ...styles.saveBtn,
    width: isMobile ? "100%" : "auto",
    padding: isMobile ? "10px" : "8px 15px",
  };

  const resetBtnStyle = {
    ...styles.resetBtn,
    width: isMobile ? "100%" : "auto",
    padding: isMobile ? "10px" : "8px 15px",
  };

  return (
    <div style={containerStyle}>
      <Sidebar />
      <h2 style={styles.title}>Settings</h2>

      <label style={styles.label}>Username</label>
      <input
        style={inputStyle}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label style={styles.label}>Email</label>
      <input
        style={inputStyle}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label style={styles.label}>Theme</label>
      <select
        style={selectStyle}
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System Default</option>
      </select>

      <label style={styles.label}>
        <input
          type="checkbox"
          checked={notifications}
          onChange={(e) => setNotifications(e.target.checked)}
        />{" "}
        Enable Notifications
      </label>

      <label style={styles.label}>Language</label>
      <select
        style={selectStyle}
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
      </select>

      <label style={styles.label}>Font Size</label>
      <select
        style={selectStyle}
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
      >
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <label style={styles.label}>
        <input
          type="checkbox"
          checked={profileVisible}
          onChange={(e) => setProfileVisible(e.target.checked)}
        />{" "}
        Public Profile
      </label>

      <label style={styles.label}>Timezone</label>
      <select
        style={selectStyle}
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
      >
        <option value="GMT">GMT</option>
        <option value="EST">EST</option>
        <option value="PST">PST</option>
        <option value="IST">IST</option>
      </select>

      <div style={buttonContainerStyle}>
        <button style={saveBtnStyle} onClick={handleSave}>
          Save
        </button>
        <button style={resetBtnStyle} onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  label: {
    display: "block",
    margin: "10px 0 5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    marginBottom: "10px",
  },
  select: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    marginBottom: "10px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  saveBtn: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "8px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  resetBtn: {
    backgroundColor: "#f44336",
    color: "white",
    padding: "8px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
