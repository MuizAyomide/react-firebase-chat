import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";





const firebaseConfig = {
  apiKey: 'AIzaSyBtRB5MfKXfz_vyg6jmz_-5rxErF-e44HA',
  authDomain: "chatapp-fe1b5.firebaseapp.com",
  projectId: "chatapp-fe1b5",
  storageBucket: "chatapp-fe1b5.appspot.com",
  messagingSenderId: "137390176584",
  appId: "1:137390176584:web:3e89a52a3db1e3d8e1db7d"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);