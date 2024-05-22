import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoqUaLIwZ59kXuwJwogtJ-bY2LM35sI7k",
  authDomain: "livechat-e3a81.firebaseapp.com",
  projectId: "livechat-e3a81",
  storageBucket: "livechat-e3a81.appspot.com",
  messagingSenderId: "854739759507",
  appId: "1:854739759507:web:2dc7c7d829648f3bb7f866",
  measurementId: "G-DESX98V060",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
