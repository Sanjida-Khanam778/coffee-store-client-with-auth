// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPyDBdP8j9djxM4-4XcBAD6uXaGng5w_E",
  authDomain: "coffee-store-e5217.firebaseapp.com",
  projectId: "coffee-store-e5217",
  storageBucket: "coffee-store-e5217.firebasestorage.app",
  messagingSenderId: "433755402752",
  appId: "1:433755402752:web:641504878faa16c3589ee5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);