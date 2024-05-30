// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import {getAuth} from '@firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcJTBps4qruZOH0dXpjoPFcHY3uo6zB-o",
  authDomain: "clickandpressinternshiptask.firebaseapp.com",
  projectId: "clickandpressinternshiptask",
  storageBucket: "clickandpressinternshiptask.appspot.com",
  messagingSenderId: "673711029464",
  appId: "1:673711029464:web:76ea9585ab04857afb6bad",
  measurementId: "G-QCM0Q5R2WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}