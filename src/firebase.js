// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";
import { useState } from 'react';

import { loginFields } from "./constants/formFields";
import FormAction from "./src/constants/FormAction";
import FormExtra from "./src/constants/FormExtra";
import Input from "./components/Input";

const fields = loginFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5Dw4XneGIyE2-mKC6qDKO7LlR0lVvpCc",
  authDomain: "shehacks-96199.firebaseapp.com",
  projectId: "shehacks-96199",
  storageBucket: "shehacks-96199.appspot.com",
  messagingSenderId: "581387585761",
  appId: "1:581387585761:web:9f47e44a0b0b78999a8fa0",
  measurementId: "G-E6M5TCEWBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();

export {db};
export default app;
export {auth}