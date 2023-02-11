import React, { useState, useEffect, createContext } from "react";

import { loginRequest, registerRequest } from "./authentication.service";
import { signOut, onAuthStateChanged, getAuth } from "firebase/auth";
const getErrorMessage = (errorCode) => {
  switch (errorCode) {
    case "auth/invalid-email":
      return "Invalid email address";
    case "auth/user-not-found":
      return "User not found";
    case "auth/wrong-password":
      return "Incorrect password";
    case "auth/email-already-in-use":
      return "Email address already in use";
    case "auth/weak-password":
      return "Password is too weak";
    default:
      return "An error occurred, please try again later";
  }
};

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);
  const [user, setUser] = useState(null);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(getErrorMessage(error));
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password != repeatedPassword) {
      setError("Passwords do not match");
      return;
    }
    setIsLoading(true);
    registerRequest(email, password)
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(getErrorMessage(error));
        setIsLoading(false);
      });
  };
  const onLogout = () => {
    setUser(null);
    signOut(auth);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
