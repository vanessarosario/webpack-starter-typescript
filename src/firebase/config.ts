import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC2CyLb7yJhJRy5ixciJIffo_ZSlwfc_ws",
    authDomain: "sql-vanessa.firebaseapp.com",
    projectId: "sql-vanessa",
    storageBucket: "sql-vanessa.appspot.com",
    messagingSenderId: "977128762725",
    appId: "1:977128762725:web:322f9418223f47b031858c",
    measurementId: "G-J3BXD1QE9D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();