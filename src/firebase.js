// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaY_e3DqbkTqOiQS5UaNGavWqjKxmyePM",
  authDomain: "beyond-service-f8018.firebaseapp.com",
  projectId: "beyond-service-f8018",
  storageBucket: "beyond-service-f8018.appspot.com",
  messagingSenderId: "821259822051",
  appId: "1:821259822051:web:57fa2b8ba28e63de2cf6d6",
  measurementId: "G-CH5D2M9EHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);