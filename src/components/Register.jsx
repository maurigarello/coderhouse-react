import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useEffect } from "react";
import ModalRegister from "./ModalRegister";


const Register = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const { showModal, setShowModalFunc, showEmail } = useContext(AuthContext);

  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setShowModalFunc(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setShowModalFunc(true);
    // eslint-disable-next-line
  }, [showModal]);

  const closeModal = () => {
    setShowModalFunc(false);
    autoClose();
  };

  const autoClose = () => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    // eslint-disable-next-line
    showModal == false ? (
    <div className="relative flex flex-col justify-center overflow-hidden">
      <div className="w-full p-6 mt-12 mx-auto bg-white rounded-md shadow-lg border border-gray-100 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-800 tracking-wide leading-normal">
          Registrarse
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              autoComplete="username"
              className="block text-sm font-semibold text-gray-600 tracking-wide leading-normal"
            >
              Ingrese un email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              autoComplete="username"
              className="block tracking-wide leading-normal w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-600 tracking-wide leading-normal"
            >
              Ingrese una contraseña (debe tener al menos 8 caracteres)
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              autoComplete="current-password"
              className="block tracking-wide leading-normal w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-600 tracking-wide leading-normal"
            >
              Ingrese su contraseña nuevamente
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              autoComplete="current-password"
              className="block tracking-wide leading-normal w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button
              onClick={signUp}
              className="text-white tracking-wider leading-normal uppercase select-none focus:outline-non bg-gray-700 hover:bg-black focus:ring-transparent w-full text-center py-3 mt-3"
            >
              Registrarse
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Ya estás registrado?{" "}
          <Link to="/login" className="font-medium text-black hover:underline">
            Acceder
          </Link>
        </p>
    </div>
      </div>
   ) : (
    <ModalRegister 
    closemodal={closeModal}
    autoclose={autoClose}
    showemail={showEmail}
    />
   )
  );
};
export default Register;
