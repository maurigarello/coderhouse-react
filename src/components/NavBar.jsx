import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";
import Email from "./Email";
import { Link } from "react-router-dom";
import { AiOutlineUserAdd, AiOutlineLogin } from "react-icons/ai";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const { registered } = useContext(AuthContext);
  const [ hover, setHover ] = useState({
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
                    className="h-8 md:flex lg:flex lg:h-10 object-cover hover:shadow-md"
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
                className="flex border-[2px] border-gray-500 px-2 py-1 text-xl italic hover:text-black text-gray-600
                  cursor-pointer transition-colors duration-300 hover:shadow-md"
                href="#!"
              >
                ELECTRO
              </Link>
              <Link
                to="/category/muebles"
                className="flex border-[2px] border-gray-500 px-2 py-1 text-xl italic hover:text-black text-gray-600
                  cursor-pointer transition-colors duration-300 hover:shadow-md"
                href="#!"
              >
                MUEBLES
              </Link>
            </div>
            {
              // eslint-disable-next-line
              registered == false ? (
                <div className="flex items-center space-x-5">
                  <div>
                    <Link to="/register">
                      <AiOutlineUserAdd
                        size={26}
                        color={hover.register ? "#6b727c" : "#333333"}
                        onMouseEnter={handleMouseEnter("register")}
                        onMouseLeave={handleMouseLeave("register")}
                      />
                    </Link>
                  </div>

                  <div>
                    <Link to="/login">
                      <AiOutlineLogin
                        size={26}
                        color={hover.login ? "#6b727c" : "#333333"}
                        onMouseEnter={handleMouseEnter("login")}
                        onMouseLeave={handleMouseLeave("login")}
                      />
                    </Link>
                  </div>
                  <CartWidget />
                </div>
              ) : (
                <div className="flex items-center space-x-1">
                  <Email />
                  <CartWidget />
                </div>
              )
            }
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
