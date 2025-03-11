import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyB_Kr-Hln12y7YScA6Jgs5-FDGwdDiz_G0",
  authDomain: "hospital-recommendation-d2c27.firebaseapp.com",
  projectId: "hospital-recommendation-d2c27",
  storageBucket: "hospital-recommendation-d2c27.firebasestorage.app",
  messagingSenderId: "1072638230879",
  appId: "1:1072638230879:web:c8141e38aee7c4bd21f6ea",
  measurementId: "G-0KWW0FWF3C"
};


// Firebase app initialize karein
const app = initializeApp(firebaseConfig);

// Firestore Database initialize karein
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
