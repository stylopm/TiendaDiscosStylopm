// Import the functions you need from the SDKs you need

import { getBytes, getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

import { getAuth } from "firebase/firebase-auth";
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.REACT_APP_API_KEY,
  authDomain: process.REACT_APP_AUTH_DOMAIN,
  projectId: process.REACT_APP_PROJECT_ID,
  storageBucket: process.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.REACT_APP_APP_ID,
  measurementId: process.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
