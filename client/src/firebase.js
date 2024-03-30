// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-ec904.firebaseapp.com",
  projectId: "mern-auth-ec904",
  storageBucket: "mern-auth-ec904.appspot.com",
  messagingSenderId: "149028630325",
  appId: "1:149028630325:web:e7e3c932781a261a4aa67c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
