// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv_bHj_FpsDXNVnnmn60sNfSPGNL492r8",
  authDomain: "toyplatefrom.firebaseapp.com",
  projectId: "toyplatefrom",
  storageBucket: "toyplatefrom.firebasestorage.app",
  messagingSenderId: "342172486703",
  appId: "1:342172486703:web:a1f37a8c7d23f25e9a8ada"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);