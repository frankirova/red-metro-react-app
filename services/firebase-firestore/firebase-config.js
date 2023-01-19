import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBvm4NYK_xQdXGk5CID0gYMR7pL7SNEm0M",
  authDomain: "red-metropolitana.firebaseapp.com",
  projectId: "red-metropolitana",
  storageBucket: "red-metropolitana.appspot.com",
  messagingSenderId: "494520466660",
  appId: "1:494520466660:web:211e44a8ec7f8416e640f1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
