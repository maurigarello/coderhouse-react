import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const { addToCart, cart, count } = useContext(CartContext);

  const [quantity, setQuantity] = useState(0);

  const onAdd = (count) => {
    setQuantity(count);
  };

  const handleAddToCart = () => {
    onAdd(count);
    addToCart(item, quantity);
  }; 

  console.log(cart);
  
  return (
    <div>
      <div className="bg-no-repeat bg-center overflow-hidden min-h-96">
        <img
          className="mx-auto p-5"
          src={item.img}
          alt={`esta es una imagen del producto`}
        />
      </div>
      <div className="p-8 mb-10 mt-2">
        <p className="text-xl text-gray-500"></p>
        <h2 className="text-3xl mt-2">{item.name}</h2>
        <h2 className="text-2xl mt-2 text-gray-700">"{item.description}"</h2>

        <ItemCount
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
