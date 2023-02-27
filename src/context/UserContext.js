import React, { createContext, useContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const AuthContext = createContext();
const UserContext = () => {
  const authInfo = {};
  return <AuthContext.Provider value={authInfo}></AuthContext.Provider>;
};

export default UserContext;
