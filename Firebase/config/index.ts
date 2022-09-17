import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbwSe6b7WhBZJrKuvHdz7d1wdYlHIgMGc",
  authDomain: "protrack-19dcc.firebaseapp.com",
  projectId: "protrack-19dcc",
  storageBucket: "protrack-19dcc.appspot.com",
  messagingSenderId: "999476491569",
  appId: "1:999476491569:web:07386fc0923dd4451c2c10",
  measurementId: "G-T3DZMFVHC9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const DB = getFirestore(app);
