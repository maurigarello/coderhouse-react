import { useEffect } from "react";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ item }) => {
  const { addToCart, cart } = useContext(CartContext);

  const [ quantity, setQuantity ] = useState(1);
  const [ hidden, setHidden ] = useState(false);
  const [ monto, setMonto ] = useState(0);

  const onAdd = (count) => {
    count < 1
    ? setQuantity(1)
    : setQuantity(count);
  };

  const handleAddToCart = () => {
    addToCart(item, quantity);
    setHidden(true);
    toast('Item Agregado al Carrito!', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  useEffect(() => {
      setMonto(item.price*quantity);
  }, [item.price, quantity]);

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
        <h2 className="font-medium text-xl text-gray-800 tracking-wider leading-tight uppercase  mt-2 text-center mx-auto">
          {item.name}
        </h2>
        <h2 className="font-regular text-lg text-gray-600 tracking-wide leading-normal mt-2 italic text-center mx-auto">
          "{item.description}"
        </h2>
        <div className="flex">
          <span className="font-regular text-md text-gray-600 tracking-wide leading-normal mx-auto mt-2 bg-gray-200 px-2 py-1 border border-gray-300">
            Monto:
            {(monto).toLocaleString("es-ar", {
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
