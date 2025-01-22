import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


//Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA46EVU9AjQO3ZLZ6TR9pPzxq4BXI2a2LY",
    authDomain: "store-comments.firebaseapp.com",
    projectId: "store-comments",
    storageBucket:  "store-comments.appspot.com",
    messagingSenderId: "151468849854",
    appId: "1:151468849854:web:eb430dfc75d0dfc8e87cef",
    measurementId: "G-6WX9DQCGHP",
   databaseURL: "https://store-comments.firebaseio.com"
  };
  
  
  
  
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase services
  const auth = getAuth(app);
  const db = getFirestore(app);
  
  export { auth, db, onAuthStateChanged }; // Export the necessary services