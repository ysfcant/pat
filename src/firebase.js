// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQEd3NpognQ2wmOo8yJ1XAKpAEA9xJuM4",
  authDomain: "projectpat-37857.firebaseapp.com",
  projectId: "projectpat-37857",
  storageBucket: "projectpat-37857.firebasestorage.app",
  messagingSenderId: "417376952209",
  appId: "1:417376952209:web:826fbf08bc4ee4ba6c8430"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);