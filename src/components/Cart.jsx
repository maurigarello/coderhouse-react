import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, deleteItem, removeList, totalCartPrice } = useContext(CartContext);

  return (
    <>
      {!cart.length ? (
        <div className="flex flex-col md:w-4/12 md:h-4/12 w-64 h-64 justify-center mx-auto mt-28 md:mt-44">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/coderhouse-ecommerce-1d45c.appspot.com/o/a1.png?alt=media&token=0b86dba6-94f8-4ba5-9227-41dbbb966b2b"
            alt="carrito vacio"
          />
          <div className="my-4 text-center font-bold text-xl">
            Tu carrito está vacío!
          </div>
          <div className="flex mx-auto">
            <button className="flex justify-center items-center bg-gray-800 hover:bg-gray-600 text-white text-md w-32 h-10 my-auto">
              Ir a comprar
            </button>
          </div>
        </div>
      ) : (
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-full bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Carrito de Compras</h1>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Detalle del producto
                </h3>
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                  Cantidad
                </h3>
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                  Precio
                </h3>
              </div>

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center hover:bg-sky-100 -mx-8 px-6 py-5"
                >
                  <div className="flex w-2/5">
                    <div className="w-28 md:ml-8">
                      <img className="h-24" src={item.img} alt={item.name} />
                    </div>
                  </div>

                  <span className="text-center w-1/5 font-semibold text-sm">
                    {item.cantidad}
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    ${item.price * item.cantidad}
                  </span>
                  <div className="flex justify-center w-1/5">
                    <button
                      onClick={() => deleteItem(item.id)}
                      className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 mx-auto"
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between md:justify-evenly">
                <button
                  onClick={() => removeList()}
                  href="#"
                  className="flex bg-gray-700 hover:bg-gray-500 text-white text-md mt-10 w-36 h-10"
                >
                  <span className="mx-auto my-auto">Vaciar Carrito</span>
                </button>
                <div className="flex mt-10">
                  <span className="font-semibold text-white bg-black border border-black my-auto px-4 py-1.5">Total: {totalCartPrice()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;
