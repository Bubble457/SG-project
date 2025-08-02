// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVJvtlkeSwNxW8a7Z1eZrvNRfswTr_qKU",
  authDomain: "react-firebase-auth-8b460.firebaseapp.com",
  projectId: "react-firebase-auth-8b460",
  storageBucket: "react-firebase-auth-8b460.appspot.com",
  messagingSenderId: "1040159086585",
  appId: "1:1040159086585:web:f7d0ec5d51f79b0a354f28",
  measurementId: "G-SM2P49V09F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);