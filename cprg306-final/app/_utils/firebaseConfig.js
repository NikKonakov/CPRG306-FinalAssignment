import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBFRql0PxrXAn-o-_OQhhHW5ikwLldyaU8",
    authDomain: "abc-finance-14448.firebaseapp.com",
    projectId: "abc-finance-14448",
    storageBucket: "abc-finance-14448.appspot.com",
    messagingSenderId: "975251525817",
    appId: "1:975251525817:web:db1bfcb1c06b99c0578b68",
    measurementId: "G-F245NTVYJ9"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
