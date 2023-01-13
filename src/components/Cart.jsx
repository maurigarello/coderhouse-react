import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Cart = () => {
  const { cart, deleteItem, removeList, totalCartPrice, totalCart } =
    useContext(CartContext);
  const [hover, setHover] = useState(false);
  const handlemouseEnter = () => setHover(true);
  const handlemouseLeave = () => setHover(false);

  return (
    <>
      {!cart.length ? (
        <div className="flex min-h-screen -mb-48flex-col">
          <div className="m-auto mt-64">
            <p className="pl-4 font-medium text-xs md:text-xl text-gray-700 tracking-wider leading-loose uppercase">
              Tu carrito está vacío. Por favor, agregá algún producto para poder
              continuar.
            </p>
            <Link
              to="/"
              className="pl-4 text-2xl text-gray-600 hover:text-black flex flex-row items-center mt-3"
            >
              ➲ Volver al inicio
            </Link>
          </div>
        </div>
      ) : (
        <div className="mx-6">
          <div className="flex flex-col justify-between w-full lg:max-w-7xl xl:m-auto">
            <h1 className="font-medium text-lg text-gray-800 tracking-wider leading-tight uppercase self-center mb-6">
              Carrito
            </h1>

            <table className="inline-block overflow-x-auto whitespace-nowrap mt-6">
              <thead className="h-10 text-center">
                <tr className="border-gray-200 border-b">
                  <th className="text-gray-700 tracking-wider leading-loose text-left pl-4">
                    Producto
                  </th>
                  <th className="text-gray-700 tracking-wider leading-loose px-6 lg:px-16 xl:px-32">
                    Precio
                  </th>
                  <th className="text-gray-700 tracking-wider leading-loose px-6 md:px-2 lg:px-8 xl:px-12">
                    Cantidad
                  </th>
                  <th className="text-gray-700 tracking-wider leading-loose px-6 md:px-2 lg:px-16 xl:px-28">
                    Subtotal
                  </th>
                  <th />
                </tr>
              </thead>

              <tbody className="w-full text-center">
                {cart.map((item) => (
                  <tr key={item.id} className="border-gray-200 border-b">
                    <th className="flex flex-row">
                      <img
                        className="pr-6 py-6 md:h-32 lg:h-48 xl:h-48"
                        src={item.img}
                        alt={item.name}
                      />
                      <div className="flex flex-col text-left">
                        <p className="font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase"></p>
                      </div>
                    </th>
                    <th className="font-light text-gray-600 tracking-wide leading-normal">
                      {item.price}
                    </th>
                    <th className="font-light text-gray-600 tracking-wide leading-normal">
                      {item.cantidad}
                    </th>
                    <th className="font-light text-gray-600 tracking-wide leading-normal">
                      {item.price * item.cantidad}
                    </th>
                    <th className="md:px-56 lg:pl-2 xl:pl-24">
                      <button onClick={() => deleteItem(item.id)}>
                        <AiOutlineCloseSquare
                          size={23}
                          color={hover ? "#000000" : "#333333"}
                          onMouseEnter={handlemouseEnter}
                          onMouseLeave={handlemouseLeave}
                        />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex flex-col md:flex-row justify-between mt-6 mb-3 mx-4">
              <button
                onClick={() => removeList()}
                className="font-medium text-gray-700 hover:text-black tracking-wider leading-loose flex flex-row items-center self-start mb-4"
              >
                Vaciar carrito
              </button>

              <div className="flex flex-col self-start w-full md:w-2/5">
                <div className="flex flex-row justify-between font-light text-gray-600 tracking-wide leading-normal lowercase">
                  <p>Cantidad de items:</p>
                  <p>{totalCart()}</p>
                </div>
                <div className="flex flex-row justify-between font-light text-gray-600 tracking-wide leading-normal lowercase">
                  <p>Gastos de envío:</p>
                  <p>¡Envío gratis!</p>
                </div>
                <div className="flex flex-row justify-between font-semibold text-gray-700 tracking-wider leading-loose uppercase">
                  <p>Total:</p>
                  <p>{totalCartPrice()}</p>
                </div>
                <Link
                  to="/checkout"
                  className="text-white tracking-wider leading-normal uppercase select-none focus:outline-non bg-gray-700 hover:bg-black focus:ring-transparent w-full text-center py-3 mt-3"
                >
                  Checkout
                </Link>
                <Link
                  to="/"
                  className="font-semibold text-gray-700 hover:text-black tracking-wide leading-normal flex flex-row items-center mt-2"
                >
                  Seguir comprando
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;
