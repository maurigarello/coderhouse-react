import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalCart, cart } = useContext(CartContext);

  const [hover, setHover] = useState(false);

  // funciones para determinar si el mouse esta sobre el item o no //
  const handlemouseEnter = () => setHover(true);
  const handlemouseLeave = () => setHover(false);

  return (
    <div>
      <Link to="/cart">
        <AiOutlineShoppingCart
          color={hover ? "#6b727c" : "#333333"}
          onMouseEnter={handlemouseEnter}
          onMouseLeave={handlemouseLeave}
          size={26}
        />
        {cart.length > 0 && (
          <span
            className="fixed top-3 md:top-4 ml-6 text-xs font-bold"
            style={{ color: hover ? "#6b727c" : "#333333" }}
          >
            {totalCart()}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;
