// Firebase v9+ Modular Setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAcP8ABDFtJopiaHMkSSZ-q7m4diXjIPRY",
  authDomain: "naney-d1e8e.firebaseapp.com",
  projectId: "naney-d1e8e",
  storageBucket: "naney-d1e8e.appspot.com",
  messagingSenderId: "135021574178",
  appId: "1:135021574178:web:60982ef001d4b3361ff27b",
  measurementId: "G-7SMTN04YD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
};
