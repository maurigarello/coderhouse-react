import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Email = () => {
  const { email } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Aquí podrías implementar la lógica para cerrar la sesión del usuario
    console.log("Sesión cerrada");
  };

  return (
    <div className="relative">
      <div className="flex font-thin my-auto text-sm md:text-lg cursor-pointer mr-4" onClick={handleMenuToggle}>
        {`${email}`}
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" onClick={handleLogout}>Cerrar sesión</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Email;
