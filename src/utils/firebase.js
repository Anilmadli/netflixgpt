// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhJLYxRPyFJmO1FbGI40FvH6W78xF1C9U",
  authDomain: "netflixgpt-21dc7.firebaseapp.com",
  projectId: "netflixgpt-21dc7",
  storageBucket: "netflixgpt-21dc7.appspot.com",
  messagingSenderId: "764673228391",
  appId: "1:764673228391:web:5347e639566b00172adec2",
  measurementId: "G-CVDXTEBSKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();