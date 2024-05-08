import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";





const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-fe1b5.firebaseapp.com",
  projectId: "chatapp-fe1b5",
  storageBucket: "chatapp-fe1b5.appspot.com",
  messagingSenderId: "137390176584",
  appId: "1:137390176584:web:3e89a52a3db1e3d8e1db7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

