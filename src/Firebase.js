import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCzIp3Tpolwdctbyjphbx7V8bveP3mt2J0",
  authDomain: "disneyhotstarclone-1f320.firebaseapp.com",
  projectId: "disneyhotstarclone-1f320",
  storageBucket: "disneyhotstarclone-1f320.appspot.com",
  messagingSenderId: "819715714859",
  appId: "1:819715714859:web:0d3f9e5a25e3d230b05f6e",
  measurementId: "G-RFGH1R4JJ0"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const provider = new GoogleAuthProvider();
export {auth,provider};
export default db;