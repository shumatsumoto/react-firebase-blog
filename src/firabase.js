import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMHpwceEGgQQ8EX1t6G0CJYAr5sB27eX0",
  authDomain: "react-firebase-blog-71e7b.firebaseapp.com",
  projectId: "react-firebase-blog-71e7b",
  storageBucket: "react-firebase-blog-71e7b.appspot.com",
  messagingSenderId: "303127586019",
  appId: "1:303127586019:web:7a3ec6600cb2195af491d6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
