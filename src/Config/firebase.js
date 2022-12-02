// Import the functions you need from the SDKs you need

import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
//   apiKey: process.REACT_APP_API_KEY,
//   authDomain: process.REACT_APP_AUTH_DOMAIN,
//   projectId: process.REACT_APP_PROJECT_ID,
//   storageBucket: process.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.REACT_APP_APP_ID,
//   measurementId: process.REACT_APP_MEASUREMENT_ID,

  apiKey: "AIzaSyCaCdQFpw68fITJG7IskCpZXQm9ee-PJfA",
  authDomain: "stylopm-two.firebaseapp.com",
  projectId: "stylopm-two",
  storageBucket: "stylopm-two.appspot.com",
  messagingSenderId: "1017225349078",
  appId: "1:1017225349078:web:ca279da730f3146c41c677",
  measurementId: "G-0T63VN40XP",
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)
