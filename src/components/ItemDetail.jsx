import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, name, description, img, stock, initial }) => {
  const [quantity, setQuantity] = useState(0);

  const onAdd = (count) => {
    setQuantity(quantity + count);
    console.log(`se agregaron al carrito ${count} unidades`);
  };

  return (
    <div>
      <div className="bg-no-repeat bg-center overflow-hidden min-h-96">
        <img
          className="mx-auto p-5"
          src={img}
          alt={`esta es una imagen del producto`}
        />
      </div>
      <div className="p-8 mb-10 mt-2">
        <p className="text-xl text-gray-500">{id}</p>
        <h2 className="text-3xl mt-2">{name}</h2>
        <h2 className="text-2xl mt-2 text-gray-700">"{description}"</h2>
        {quantity > 0 ? (
          <div className="flex w-28 pt-8 mx-auto items-center">
            <Link
              className="bg-gray-700 text-white font-semibold hover:bg-gray-400 py-2 px-4 border border-black hover:border-transparent rounded w-fit ml-20"
              to="/cart"
            >
              Finalizar compra
            </Link>
          </div>
        ) : (
          <ItemCount
            stock={stock}
            initial={initial}
            onAdd={onAdd}
            quantity={quantity}
          />
        )}
      </div>
    </div>
  );
};
export default ItemDetail;
