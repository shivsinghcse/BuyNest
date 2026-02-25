// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFJbFlZqJOr4csP4tgCotyZI9iHdslbkU",
  authDomain: "buynest-471c4.firebaseapp.com",
  projectId: "buynest-471c4",
  storageBucket: "buynest-471c4.firebasestorage.app",
  messagingSenderId: "1064272842944",
  appId: "1:1064272842944:web:527fed06545ab77ca49d25",
  measurementId: "G-YLJG8XHXQ4"
};

// Initialize Firebase
const firebaseAppConfig = initializeApp(firebaseConfig);

export default firebaseAppConfig