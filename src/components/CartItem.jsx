import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../db/db";

const CartItem = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  });

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(PRODUCTS);
      }, 2000);
    });
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center align-center mx-auto">
          <RotatingLines
            className=""
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-full bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Carrito de Compras</h1>
                <h2 className="font-semibold text-2xl"></h2>
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

              <div className="flex items-center hover:bg-sky-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20 ml-2">
                    <img className="h-24" src="" alt="" />
                  </div>
                </div>

                <span className="text-center w-1/5 font-semibold text-sm">
                  1
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  $400.00
                </span>
                <div className="flex justify-center w-1/5">
                  <button className="bg-gray-700 text-white font-bold hover:bg-gray-400 py-2 px-4 border border-black hover:border-transparent rounded place-content-end mx-auto">
                    -
                  </button>
                </div>
              </div>

              <Link
                to="/"
                href="#"
                className="flex bg-blue-600 text-white hover:bg-blue-800 text-md mt-10 w-36 h-10"
              >
                <span className="mx-auto my-auto">Seguir comprando</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default CartItem;
