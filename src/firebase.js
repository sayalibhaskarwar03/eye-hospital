// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3PGlOGySH4LA1gwF2EhMrLWH9Fv1TlRc",
  authDomain: "eye-hospital-b397a.firebaseapp.com",
  projectId: "eye-hospital-b397a",
  storageBucket: "eye-hospital-b397a.firebasestorage.app",
  messagingSenderId: "890755508989",
  appId: "1:890755508989:web:f789aadd585b3b2ad3ac94",
  measurementId: "G-X65YGBXEGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);