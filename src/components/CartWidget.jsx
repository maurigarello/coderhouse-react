import cart from "../assets/cart.png";

const CartWidget = () => {
  return (
    <div>
      <a
        className="flex font-bold text-black
                   cursor-pointer transition-colors duration-300"
        href={() => false}
      >
        <img className="fill-current h-7 w-7 mr-2" src={cart} />
      </a>
    </div>
  );
};

export default CartWidget;
