// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBWVnkGJiYk_xkmoPBz5t5DSv4-qCMbF34",
  authDomain: "clone-f257e.firebaseapp.com",
  projectId: "clone-f257e",
  storageBucket: "clone-f257e.appspot.com",
  messagingSenderId: "53802734537",
  appId: "1:53802734537:web:9f6ed8db6b1d2309e30e18",
  measurementId: "G-CVJBQKNGTL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
