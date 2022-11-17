import CartWidget from './CartWidget';

const logo = require('./kwik-logo.png');
const homer = require('./02.png');
const abraham = require('./01.png');


const Navbar = () => {
    return (
      <div>
        <div
          className="flex flex-col items-center justify-center mt-32">
          <div className="flex flex-col">
            
            <nav
              className="flex justify-around py-4 bg-white/80
                    backdrop-blur-md shadow-md w-full
                    fixed top-0 left-0 right-0 z-10 ">
              <div className="flex items-center">
                <a className="cursor-pointer">
                  <h3 className="text-2xl font-medium text-blue-500">
                    <img
                      className="h-10 object-cover"
                      src={logo}
                      alt="LOGO"/>
                  </h3>
                </a>
              </div>

              <div className="items-center hidden space-x-8 lg:flex">
                <a
                  className="flex text-xl text-gray-600 hover:text-green-700
                            cursor-pointer transition-colors duration-300">
                  Inicio
                </a>

                <a
                  className="flex text-xl text-gray-600 hover:text-green-700
                  cursor-pointer transition-colors duration-300">
                  Categorías
                </a>
              </div>

              <div className="flex items-center space-x-5">
                <a
                  className="flex text-xl text-gray-600 hover:text-green-700
                            cursor-pointer transition-colors duration-300">
                  <img 
                  className="fill-current h-7 w-7 mr-2 mt-0.5"
                  src={homer}/>
                  Registrarse
                </a>

                <a
                  className="flex text-xl text-gray-600 hover:text-green-700
                  cursor-pointer transition-colors duration-300">
                  <img 
                  className="fill-current h-7 w-7 mr-2 mt-0.5"
                  src={abraham}/>
                  Login
                </a>

                <CartWidget />

              </div>
            </nav>
          </div>
        </div>
      </div>
    )};
  


export default Navbar;
