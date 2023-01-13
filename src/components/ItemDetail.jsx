import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { addToCart, cart, count } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const [hidden, setHidden] = useState(false);

  const onAdd = (count) => {
    setQuantity(count);
  };

  const handleAddToCart = () => {
    onAdd(count);
    addToCart(item, quantity);
    setHidden(true);
  };

  return (
    <div className="">
      <div className="bg-no-repeat bg-center overflow-hidden">
        <img
          className="mx-auto p-5 max-w-sm"
          src={item.img}
          alt={`esta es una imagen del producto`}
        />
      </div>
      <div className="p-8 mb-10 mt-2">
        <h2 className="text-3xl mt-2 text-center mx-auto">{item.name}</h2>
        <h2 className="text-2xl mt-2 italic text-gray-700 text-center mx-auto">
          "{item.description}"
        </h2>
        <div className="flex">
          <span className="mx-auto mt-2 text-black bg-gray-200 px-2 py-1 border border-gray-300 text-xl">
            Monto: {(item.price * quantity).toLocaleString("es-ar", {
                      style: "currency",
                      currency: "ARS",
                      minimumFractionDigits: 2,
                    })}
          </span>
        </div>

        <ItemCount
          hidden={hidden}
          handleAddToCart={handleAddToCart}
          cart={cart}
          onAdd={onAdd}
          stock={item.stock}
        />
      </div>
    </div>
  );
};
export default ItemDetail;
