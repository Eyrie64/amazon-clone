import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEA9tpGRn6iaM5lAQ3sPORUOVZ_5tvPbA",
    authDomain: "clone-8bd0d.firebaseapp.com",
    projectId: "clone-8bd0d",
    storageBucket: "clone-8bd0d.appspot.com",
    messagingSenderId: "184185963418",
    appId: "1:184185963418:web:1b706ed99dc0a79ebb7023",
    measurementId: "G-0NP4MEQ77J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};