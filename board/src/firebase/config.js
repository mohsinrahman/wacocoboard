// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2fmX07sMNNy8WW1LLCD7qHwVhQ690few",
  authDomain: "workspace-80b62.firebaseapp.com",
  projectId: "workspace-80b62",
  storageBucket: "workspace-80b62.firebasestorage.app",
  messagingSenderId: "991403816639",
  appId: "1:991403816639:web:5c59a487b633785fd8380a",
  measurementId: "G-XV4XCB8Q50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);
