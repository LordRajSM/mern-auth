// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-auth-7a106.firebaseapp.com",
    projectId: "mern-auth-7a106",
    storageBucket: "mern-auth-7a106.firebasestorage.app",
    messagingSenderId: "447624797464",
    appId: "1:447624797464:web:b4cd418a0a2ce07573d26d",
    measurementId: "G-CKBXT872KC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);