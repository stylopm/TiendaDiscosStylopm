import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCaCdQFpw68fITJG7IskCpZXQm9ee-PJfA",
    authDomain: "stylopm-two.firebaseapp.com",
    projectId: "stylopm-two",
    storageBucket: "stylopm-two.appspot.com",
    messagingSenderId: "1017225349078",
    appId: "1:1017225349078:web:ca279da730f3146c41c677",
    measurementId: "G-0T63VN40XP"
}

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)