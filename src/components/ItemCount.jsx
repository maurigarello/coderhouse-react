import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd, quantity }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    count < stock ? setCount(count + 1) : setCount(count);
  };

  const decrement = () => {
    count > initial ? setCount(count - 1) : setCount(count);
  };

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
            onChange={(e) => setCount(e.target.value)}
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
      <div className="flex mt-3 px-4">
        <button
          onClick={() => onAdd(count)}
          className="bg-gray-700 text-white font-semibold hover:bg-gray-400 py-2 px-4 border border-black hover:border-transparent rounded place-content-end mx-auto"
        >
          Añadir al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
