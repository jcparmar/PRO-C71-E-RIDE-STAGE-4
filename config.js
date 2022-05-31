import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyCZmIVx7RqxqVHrB8Yh05v8GvDOLsY2t3k",
  authDomain: "project-621c0.firebaseapp.com",
  projectId: "project-621c0",
  storageBucket: "project-621c0.appspot.com",
  messagingSenderId: "506600820639",
  appId: "1:506600820639:web:ee2475cd11cefc410ab7aa"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
