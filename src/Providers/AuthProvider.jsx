/* eslint-disable react/prop-types */

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
        setUser(currentUser);
      console.log("User is signed in:", currentUser);
    } else {
      console.log("User is signed out");
      setUser(null);
    }
  });

  const authInfo = {
    user,
    createUser,
    signInUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
