// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Asegúrate de incluir getAuth y GoogleAuthProvider

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_tS8VIw0Lqh_SXyceHSrTSjAWj80NIMM",
  authDomain: "listit-f405a.firebaseapp.com",
  projectId: "listit-f405a",
  storageBucket: "listit-f405a.appspot.com",
  messagingSenderId: "960090702616",
  appId: "1:960090702616:web:8e7600fd3ae48b87a4d46d",
  measurementId: "G-Y6ERERNRTP"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(appFirebase);
export const provider = new GoogleAuthProvider();