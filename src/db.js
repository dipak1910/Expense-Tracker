import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyBYGVBHw0NoHZb5QvSe85sTWTIzpDz1PTA",

  authDomain: "expense-tracker-79764.firebaseapp.com",

  projectId: "expense-tracker-79764",

  storageBucket: "expense-tracker-79764.appspot.com",

  messagingSenderId: "534118716283",

  appId: "1:534118716283:web:bc7e5ddb3b956c701ee3de"

};


const app = initializeApp(firebaseConfig);

export let db = getFirestore(app);
 export let auth = getAuth(app);