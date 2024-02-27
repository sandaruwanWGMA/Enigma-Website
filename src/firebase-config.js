import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWHq8ZmvNGqDio5vGzcttCfGSx5MTF7Xc",
  authDomain: "enigma-20e21.firebaseapp.com",
  projectId: "enigma-20e21",
  storageBucket: "enigma-20e21.appspot.com",
  messagingSenderId: "713665401905",
  appId: "1:713665401905:web:1a3f1d1dfd5076ac08b110",
  measurementId: "G-DK0F505B66",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
