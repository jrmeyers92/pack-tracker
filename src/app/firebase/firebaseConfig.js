import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0Lp0bDNWDdjMIzRatQiA9rCuctYJc4-U",
  authDomain: "pack-tracker-8ed08.firebaseapp.com",
  projectId: "pack-tracker-8ed08",
  storageBucket: "pack-tracker-8ed08.appspot.com",
  messagingSenderId: "751773230482",
  appId: "1:751773230482:web:407f020d6a0ff895608d4b",
  measurementId: "G-0MJTKMKCMX",
};

// if (!firebase.apps.length) {
initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
