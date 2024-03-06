import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA1auHfzT3ugw2aneXbc5o8to8OxWvz0P0",
  authDomain: "movie-app-46e29.firebaseapp.com",
  projectId: "movie-app-46e29",
  storageBucket: "movie-app-46e29.appspot.com",
  messagingSenderId: "138895673398",
  appId: "1:138895673398:web:e354a637a80694927cb097",
  measurementId: "G-BTZZW6JQJF"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
