// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZLs434_wHFtOd6IPgilhiHPPoDf88904",
  authDomain: "assianmet-protfolio.firebaseapp.com",
  projectId: "assianmet-protfolio",
  storageBucket: "assianmet-protfolio.appspot.com",
  messagingSenderId: "496899345008",
  appId: "1:496899345008:web:fb39e575ec5c7b8db042b5",
  measurementId: "G-Q6TNNV02WW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics;