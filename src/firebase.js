import app from "firebase/app";
import "firebase/database";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC54Ic8Ilw9HvzoxaM-zm6NBS_zrzyxNNk",
    authDomain: "disney-lien.firebaseapp.com",
    projectId: "disney-lien",
    storageBucket: "disney-lien.appspot.com",
    messagingSenderId: "757878687397",
    appId: "1:757878687397:web:e16a2c664797b246b2af4c",
    measurementId: "G-5F19RF06BS"
  };
 app.initializeApp(firebaseConfig)
  const db =app.firestore()
  const database =app.database()
  export {db,database}