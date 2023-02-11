import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDylpW4bHcFyskVxT2a0AWAoD3EWAN6ufo",
  authDomain: "mealstogo-22457.firebaseapp.com",
  projectId: "mealstogo-22457",
  storageBucket: "mealstogo-22457.appspot.com",
  messagingSenderId: "729510753679",
  appId: "1:729510753679:web:80d39cb9af276b6ca8c7fa",
  measurementId: "G-9GQMFE6EPR",
};
// Initialize Firebase
if (!getApps().length) {
  initializeApp(firebaseConfig);
}
const auth = getAuth();
export const loginRequest = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(errorCode);
      });
  });
};

export const registerRequest = (email, password) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(errorCode);
      });
  });
};
