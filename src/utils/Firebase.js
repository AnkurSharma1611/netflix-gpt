// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw2xY3wKM2DjhhzS6iYgewFTX-BwMCHpY",
  authDomain: "netflix-gpt-284b0.firebaseapp.com",
  projectId: "netflix-gpt-284b0",
  storageBucket: "netflix-gpt-284b0.appspot.com",
  messagingSenderId: "879738181404",
  appId: "1:879738181404:web:d8e75523dc7c647688ccd9",
  measurementId: "G-MJMK0NGDXY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();