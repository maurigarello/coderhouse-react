import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Email = () => {
  const { email, handleLogout } = useContext(AuthContext);
  // eslint-disable-next-line
  const [ isOpen, setIsOpen ] = useState(false);
  const dropdownRef = useRef(null); // Creamos una referencia al dropdown

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    // Si el clic se realizó fuera del dropdown, cerramos el menú
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Agregamos el evento "click" al elemento "document"
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Removemos el evento cuando se desmonta el componente
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex font-thin my-auto text-sm md:text-lg cursor-pointer mr-4" onClick={handleMenuToggle}>
        {`${email}`}
      </div>
      {isOpen && (
        <div className="absolute right-1 md:right-3 mt-3 md:mt-1 md:w-48 w-40 bg-white shadow-md z-10">
          <div className="">
            <a href="!#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={handleLogout}>Cerrar sesión</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Email;
