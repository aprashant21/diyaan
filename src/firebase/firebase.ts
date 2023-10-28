// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhnAiMF2dMi56Ol2mn3wN2pNN_3t_v3WA",
  authDomain: "diyaan-11b89.firebaseapp.com",
  projectId: "diyaan-11b89",
  storageBucket: "diyaan-11b89.appspot.com",
  messagingSenderId: "761163490988",
  appId: "1:761163490988:web:55dd93e1b8c39ae9eca109"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);