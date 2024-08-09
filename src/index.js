import "dotenv/config";
console.log(process.env);

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection
  // ,onSnapshot,
  // addDoc,
  // deleteDoc,
  // doc,
  // query,
  // where,
  // orderBy,
  // serverTimestamp,
  // getDoc,
  // updateDoc,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";


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
initializeApp(firebaseConfig);

//init services
const db = getFirestore();
const auth = getAuth();

//colref
const colref = collection(db, "expenses");

// authentication begins

const form = document.querySelector("#auth");
const signIn = document.querySelector("#sign-in");

//signing users up
const signUp = document.querySelector("#sign-up");

signUp.addEventListener("click", (e) => {
  e.preventDefault();

  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  email = email.value;
  password = password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      form.reset();
      console.log("successfully signed in");
      window.location.href = `blank.html`;
    })
    .catch((err) => {
      console.log(err);
    });
});

// logging in
form.addEventListener("submit", (e) => {
  e.preventDefault();

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("successfully signed in");
      window.location.href = `blank.html`;
    })
    .catch((err) => {
      console.error(err);
    });
});
