// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNVtp_4st81Y0QxkE_wrxuYTc3hjHLr8Y",
  authDomain: "app-livros-94c0a.firebaseapp.com",
  projectId: "app-livros-94c0a",
  storageBucket: "app-livros-94c0a.firebasestorage.app",
  messagingSenderId: "931863852859",
  appId: "1:931863852859:web:6c82be39abdef5ce4be91e",
  measurementId: "G-T4HF18P9JF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);