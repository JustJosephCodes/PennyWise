// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc, query, where, orderBy, serverTimestamp, getDoc, updateDoc} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDS3I7JronhlZIVeLzecxiG2mukkLjdY4",
  authDomain: "pennywise-aee84.firebaseapp.com",
  projectId: "pennywise-aee84",
  storageBucket: "pennywise-aee84.appspot.com",
  messagingSenderId: "731321605151",
  appId: "1:731321605151:web:589b6cab9066458f90892a",
  measurementId: "G-JKYX0WKXFP",
};

//init firebase
initializeApp(firebaseConfig)

//init services
const db = getFirestore();
const auth = getAuth()

//colref
const colref = collection(db, `Log-in's`)

// authentication 

//signing users up
const form = document.querySelector("#auth-form")
form.addEventListener('submit', (e)=>{
  e.preventDefault()
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  email = email.value 
  password = password.value
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((cred)=>{
      console.log(`user is`,cred.user);
      form.reset()
    })
    .catch((err)=>{
      console.error(err);
    })
} )