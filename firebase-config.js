// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUg9wKDz0kb_rAABLMFXM7LXS7WS18hwY",
  authDomain: "sarp-40571.firebaseapp.com",
  projectId: "sarp-40571",
  storageBucket: "sarp-40571.firebasestorage.app",
  messagingSenderId: "457540042625",
  appId: "1:457540042625:web:68fd49fc2428595afd7280",
  measurementId: "G-MHZQJED827"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
