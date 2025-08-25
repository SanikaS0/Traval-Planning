// admin.js
const admin = require("firebase-admin");

// Downloaded service account key from Firebase Console → Project Settings → Service accounts
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://web-app-cf2a3-default-rtdb.firebaseio.com"
});

// Set admin claim for a user
const uid = "<USER_UID>"; // Replace with the uid of the user you want as admin

admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log(`Admin claim set successfully for UID: ${uid}`);
  })
  .catch((error) => {
    console.error("Error setting admin claim:", error);
  });
