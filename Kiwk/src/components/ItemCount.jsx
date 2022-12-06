import { useState } from "react";

const ItemCount = () => {
  let stock = 10;

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => (count === 0 ? 0 : setCount(count - 1));

  const Agregar = () =>
    count > stock
      ? alert("no hay stock")
      : ((stock = stock - count), alert(`se agregaron ${count} al carrito`));

  return (
    <div className="flex items-center w-28 ml-auto mr-auto pt-8">
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
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
      <button
        onClick={Agregar}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white ml-20 py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
