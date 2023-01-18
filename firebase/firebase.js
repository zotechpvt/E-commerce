// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh9Ahe2buLVJhYyL1NASTs5x3Vs56tXyo",
  authDomain: "auth-ce3b8.firebaseapp.com",
  projectId: "auth-ce3b8",
  storageBucket: "auth-ce3b8.appspot.com",
  messagingSenderId: "538056822841",
  appId: "1:538056822841:web:e4853f78af9526b138bde8",
  measurementId: "G-0E8RYCS4D0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
