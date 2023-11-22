// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAoqsteBxJxWIItJ5D1XyHz8mbDq3Mr0Qg",
authDomain: "routecacau.firebaseapp.com",
databaseURL: "https://routecacau-default-rtdb.firebaseio.com",
projectId: "routecacau",
storageBucket: "routecacau.appspot.com",
messagingSenderId: "585882747400",
appId: "1:585882747400:web:d3e23d334dd3a8fe9487bd",
measurementId: "G-X6M6TNKQ0C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);