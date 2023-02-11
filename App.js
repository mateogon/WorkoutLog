import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
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

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";

import { Navigation } from "./src/infrastructure/navigation/index";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
