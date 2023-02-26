import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Modal from "./Modal";

const Login = () => {
  const [password, setPassword] = useState("");
  const [showEmail, setShowEmail] = useState("");
  const { registered, setShowModalFunc, showModal } = useContext(AuthContext);

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, showEmail, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          console.log(`autenticado como: ${user.email}`);
          setShowModalFunc(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    registered && setShowModalFunc(true);
    // eslint-disable-next-line
  }, [registered]);

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
    showModal == true ? (
      <Modal
        closemodal={closeModal}
        autoclose={autoClose}
        showemail={showEmail}
      />
    ) : (
      <div className="relative flex flex-col justify-center overflow-hidden">
        <div className="w-full p-6 mt-12 mx-auto bg-white rounded-md shadow-lg border border-gray-100 lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-gray-800 tracking-wide leading-normal">
            Iniciar sesión
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="email"
                autoComplete="username"
                className="block text-sm font-semibold text-gray-600 tracking-wide leading-normal"
              >
                Email
              </label>
              <input
                onChange={(e) => setShowEmail(e.target.value)}
                type="email"
                value={showEmail}
                autoComplete="username"
                className="block tracking-wide leading-normal w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                autoComplete="current-password"
                className="block text-sm font-semibold text-gray-600 tracking-wide leading-normal"
              >
                Contraseña
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                autoComplete="current-password"
                className="block tracking-wide leading-normal w-full px-4 py-2 mt-2 text-gray-800 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <a
              // eslint-disable-next-line
              href="!#"
              className="text-xs text-gray-600 tracking-wide leading-normal hover:underline"
            >
              Olvidaste tu contraseña?
            </a>
            <div className="mt-6">
              <button
                onClick={signIn}
                className="text-white tracking-wider leading-normal uppercase select-none focus:outline-non bg-gray-700 hover:bg-black focus:ring-transparent w-full text-center py-3 mt-3"
              >
                Acceder
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            No tenés una cuenta?{" "}
            <Link
              to="/register"
              className="font-medium text-black hover:underline"
            >
              Registrarse
            </Link>
          </p>
        </div>
      </div>
    )
  );
};

export default Login;
