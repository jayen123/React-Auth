// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjNKtUHpq8-n0ODjM-ffvU8jxTgD52NiA",
  authDomain: "react-auth-e9243.firebaseapp.com",
  projectId: "react-auth-e9243",
  storageBucket: "react-auth-e9243.firebasestorage.app",
  messagingSenderId: "441671778803",
  appId: "1:441671778803:web:868f77b4b27d0056da9286"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);