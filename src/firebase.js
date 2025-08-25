
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCwLE7MkcRhc-g0j2VmLF3nIJRysyc7FAI",
  authDomain: "web-app-cf2a3.firebaseapp.com",
  databaseURL: "https://web-app-cf2a3-default-rtdb.firebaseio.com",
  projectId: "web-app-cf2a3",
  storageBucket: "web-app-cf2a3.appspot.com",
  messagingSenderId: "604107245897",
  appId: "1:604107245897:web:0dd567e79f0197db91f298",
  measurementId: "G-K5DPLQ1Q3Q"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence)
  .then(() => console.log("✅ Auth persistence set to local"))
  .catch((err) => console.error("❌ Auth persistence error:", err));

const db = getDatabase(app);

export { auth, db };

