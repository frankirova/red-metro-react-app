import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../services/firebase-firestore/firebase-config";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const signup = async (email, password) => {
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
      return error.message;
    }
  };

  const login = async (email, password) => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
      return error.message;
    }
  };
  return (
    <authContext.Provider
      value={{ signup, login, isLoggedIn, setIsLoggedIn, error }}
    >
      {children}
    </authContext.Provider>
  );
};
