
import {getApp,getApps,  initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyD0rNNcdCfoFcxlRdn1gvNdQb4N-mbICqw",
    authDomain: "dropbox-54fa1.firebaseapp.com",
    projectId: "dropbox-54fa1",
    storageBucket: "dropbox-54fa1.appspot.com",
    messagingSenderId: "116727562770",
    appId: "1:116727562770:web:5c0131f48c747ed1570ecb"
  };

// Initialize Firebase
const app = getApps().length?getApp(): initializeApp(firebaseConfig);
const db =getFirestore(app);
const storage =getStorage(app);

export {db,storage}