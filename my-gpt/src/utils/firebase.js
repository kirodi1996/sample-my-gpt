// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLgbK7kywbwq7kwpNmUIv9-gavbAEPbYU",
  authDomain: "my-gpt-cb2a2.firebaseapp.com",
  projectId: "my-gpt-cb2a2",
  storageBucket: "my-gpt-cb2a2.firebasestorage.app",
  messagingSenderId: "123914740765",
  appId: "1:123914740765:web:4b8dfee59b499be18252f4",
  measurementId: "G-TK3ZDZ0SZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();