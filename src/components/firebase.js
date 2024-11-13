// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAHkUcYnJIX4Hxj40JhNSWXMLRzVbfAyWM",
//   authDomain: "resume-website-61a6e.firebaseapp.com",
//   projectId: "resume-website-61a6e",
//   storageBucket: "resume-website-61a6e.firebasestorage.app",
//   messagingSenderId: "829522628987",
//   appId: "1:829522628987:web:d60aef7be2139fe856adde"
// };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;