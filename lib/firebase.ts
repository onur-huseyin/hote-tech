// Import the functions you need from the SDKs you need
import { initializeApp , getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb_9Nrg6mC2kKaJcXAtaMhVvnVApa6E3A",
  authDomain: "hoteteknoloji.firebaseapp.com",
  projectId: "hoteteknoloji",
  storageBucket: "hoteteknoloji.firebasestorage.app",
  messagingSenderId: "1024396411701",
  appId: "1:1024396411701:web:9a86abb715a08101b3827c",
  measurementId: "G-1HHNZE5VFV"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db, app,  };