import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [ registered, setRegistered ] = useState(false);
  const [ email, setEmail ] = useState("");
  const [ showModal, setShowModal ] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Si el usuario está autenticado, establece la variable "registered" en true
        setRegistered(true);
        // Obtiene el correo electrónico del usuario y lo establece en la variable "email"
        setEmail(user.email);
        // Guarda la información del usuario en SessionStorage
        sessionStorage.setItem("user", JSON.stringify(user));
      } else {
        // Si el usuario no está autenticado, establece la variable "registered" en false
        setRegistered(false);
        // Borra la información del usuario de SessionStorage
        sessionStorage.removeItem("user");
      }
    });
  }, []);

  const setShowModalFunc = (value) => {
    setShowModal(value);
  };

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        sessionStorage.removeItem("user");
        setRegistered(false);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <AuthContext.Provider value={{ registered, email, setEmail, handleLogout, setShowModalFunc, showModal }}>
      {children}
    </AuthContext.Provider>
  );
};
