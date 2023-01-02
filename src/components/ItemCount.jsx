import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ handleAddToCart, initial = 1, stock, onAdd, hidden }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    count < stock && setCount(count + 1);
    onAdd(count + 1);
  };

  const decrement = () => {
    count > initial && setCount(count - 1);
    onAdd(count - 1);
  };

  console.log(count);

  return (
    <>
      <div className="flex w-28 pt-8 mx-auto">
        <div className="flex h-10 w-full rounded-lg relative bg-transparent mt-1">
          <button
            onClick={decrement}
            className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
            className="outline-none focus:outline-none border text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
          ></input>
          <button
            onClick={increment}
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>

      {hidden ? (
        <div className="flex my-auto">
          <Link
            className="flex bg-gray-800 hover:bg-gray-600 text-white text-md mt-10 py-2 px-4 mx-auto"
            to="/cart"
          >
            Terminar compra
          </Link>
        </div>
      ) : (
        <div className="flex my-auto">
          <button
            onClick={handleAddToCart}
            className="flex bg-gray-800 hover:bg-gray-600 text-white text-md mt-10 py-2 px-4 mx-auto"
          >
            Añadir al carrito
          </button>
        </div>
      )}
    </>
  );
};

export default ItemCount;
