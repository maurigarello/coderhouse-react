import { Link } from "react-router-dom";
import cart from "../assets/cart.png";

const CartWidget = () => {
  return (
    <div>
      <Link to ="/cart"
        className="flex font-bold text-black
                   cursor-pointer transition-colors duration-300"
        href="#!"
      >
        <img className="fill-current h-7 w-7 mr-2" src={cart} alt="#!"/>
      </Link>
    </div>
  );
};

export default CartWidget;
