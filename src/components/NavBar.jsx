import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineUserAdd, AiOutlineLogin } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {

  const [hover, setHover] = useState({
    register: false,
    login: false,
  });
// funciones para determinar si el mouse esta sobre el objeto o no, pasandole un callback "icon" //
  const handleMouseEnter = (icon) => () =>
    setHover((prevHover) => ({ ...prevHover, [icon]: true }));
  const handleMouseLeave = (icon) => () =>
    setHover((prevHover) => ({ ...prevHover, [icon]: false }));

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-32">
        <div className="flex flex-col">
          <nav
            className="flex justify-around py-4 bg-white/80
                    backdrop-blur-md shadow-md w-full
                    fixed top-0 left-0 right-0 z-10 "
          >
            <div className="flex items-center">
              <Link to="/" className="cursor-pointer" href="#!">
                <h3 className="text-2xl font-medium text-blue-500">
                  <img
                    className="h-8 md:flex lg:flex lg:h-10 object-cover"
                    href="#!"
                    alt="LOGO"
                    src={logo}
                  />
                </h3>
              </Link>
            </div>

            <div className="items-center hidden space-x-8 lg:flex">
              <Link
                to="/category/electro"
                className="flex text-xl italic hover:text-black text-gray-600
                  cursor-pointer transition-colors duration-300"
                href="#!"
              >
                ELECTRO
              </Link>
              <Link
                to="/category/muebles"
                className="flex text-xl italic hover:text-black text-gray-600
                  cursor-pointer transition-colors duration-300"
                href="#!"
              >
                MUEBLES
              </Link>
            </div>

            <div className="flex items-center space-x-5">
              <div>
                <AiOutlineUserAdd
                  size={26}
                  color={hover.register ? "#6b727c" : "#333333"}
                  onMouseEnter={handleMouseEnter("register")}
                  onMouseLeave={handleMouseLeave("register")}
                />
              </div>
              <div>
                <AiOutlineLogin
                  size={26}
                  color={hover.login ? "#6b727c" : "#333333"}
                  onMouseEnter={handleMouseEnter("login")}
                  onMouseLeave={handleMouseLeave("login")}
                />
              </div>
              <CartWidget />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
