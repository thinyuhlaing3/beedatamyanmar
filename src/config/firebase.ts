// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2A763D-eLednjgkqyAubjASrUQlruItQ",
  authDomain: "beedatamyanmar.firebaseapp.com",
  projectId: "beedatamyanmar",
  storageBucket: "beedatamyanmar.firebasestorage.app",
  messagingSenderId: "1033838908748",
  appId: "1:1033838908748:web:3556558d757aeae7d16be9",
  measurementId: "G-LMLT04BN5Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
// init services
export const db = getFirestore(app);

// const userCollectionRef = collection(db, "users");
// const data = await getDocs(userCollectionRef);
// const filteredData = data.docs.map((doc) => ({
//   ...doc.data(),
