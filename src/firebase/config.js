import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: AIzaSyDKGBSEbqV7IBxEwU9OJ6uJ_NI2OOgv4RA,
  authDomain: appointment-scheduler-6e7b8.firebaseapp.com,
  projectId: appointment-scheduler-6e7b8,
  storageBucket: appointment-scheduler-6e7b8.firebasestorage.app,
  messagingSenderId: 121171123058,
  appId: 1:121171123058:web:03c322dfd5cdbdc5c71beb
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
