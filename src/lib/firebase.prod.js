import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

// we need to somehow seed the database
//config from firebase
const config = {
  apiKey: "AIzaSyDcMdo7FSDH-E86XDvmRNcxs-mpSjXSJLQ",
  authDomain: "netflix-clone-78600.firebaseapp.com",
  databaseURL: "https://netflix-clone-78600.firebaseio.com",
  projectId: "netflix-clone-78600",
  storageBucket: "netflix-clone-78600.appspot.com",
  messagingSenderId: "829557917104",
  appId: "1:829557917104:web:da37cf8e2fa270627b8275",
};

const firebase = Firebase.initializeApp(config);

//the bottom line commented out is used to import data to firestore. run it once then comment it out so you dont have dulicate data

//seedDatabase(firebase);

export { firebase };
