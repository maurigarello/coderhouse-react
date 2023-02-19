import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [registered, setRegistered] = useState(false);
  const [ email, setEmail ] = useState("");

  const handleRegistered = (value) => {
    setRegistered(value);
  };

  return (
    <AuthContext.Provider value={{ registered, handleRegistered, email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
};
