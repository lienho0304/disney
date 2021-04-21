import firebase from "firebase"
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBWWM_k6-M1mELlhp5QuNWkG6m39Z9hhk",
    authDomain: "disney-anhlien.firebaseapp.com",
    projectId: "disney-anhlien",
    storageBucket: "disney-anhlien.appspot.com",
    messagingSenderId: "1073958151989",
    appId: "1:1073958151989:web:2d99e9f1a237ab03274e7c",
    measurementId: "G-TD6117CZ8R"
  };

  const firebaeApp =firebase.initializeApp(firebaseConfig)

  const db=firebase.firestore()
  const auth=firebase.auth()
  const storage =firebase.storage()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db,auth,storage,provider}