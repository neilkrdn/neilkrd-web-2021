// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";

const config = {
  apiKey: "AIzaSyD02ejWUskgb7_npFcPF1t8alG8Wd5CMSA",
  authDomain: "neilkardan-com.firebaseapp.com",
  projectId: "neilkardan-com",
  storageBucket: "neilkardan-com.appspot.com",
  messagingSenderId: "450169653524",
  appId: "1:450169653524:web:7ccc970772bdfa8f759a01",
  measurementId: "G-5K3PYTTL7N"
};

// Initialize Firebase
const firebaseApp = initializeApp(config);

// Get a reference to the database service
const database = getDatabase(firebaseApp);

export default firebaseApp;