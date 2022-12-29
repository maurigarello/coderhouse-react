import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, deleteItem, removeList } = useContext(CartContext);

  return (
    <>
      {!cart.length ? (
        <div className="flex flex-col w-64 h-64 justify-center mx-auto mt-14">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/coderhouse-ecommerce-1d45c.appspot.com/o/a1.png?alt=media&token=0b86dba6-94f8-4ba5-9227-41dbbb966b2b"
            alt="carrito vacio"
          />
          <div className="my-4 text-center font-bold">
            Tu carrito está vacío!
          </div>
          <div className="flex mx-auto">
            <button className="flex justify-center items-center bg-blue-600 text-white hover:bg-blue-800 text-md w-32 h-10 my-auto">
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
                      className="bg-blue-600 text-white font-bold hover:bg-blue-800 py-2 px-4 mx-auto"
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-center">
                <button
                  onClick={() => removeList()}
                  href="#"
                  className="flex bg-blue-600 text-white hover:bg-blue-800 text-md mt-10 w-36 h-10"
                >
                  <span className="mx-auto my-auto">Vaciar Carrito</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Cart;
