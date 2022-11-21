const carrito = require('./03.png');

const CartWidget = () => {
  return (
    <div>
      <a
        className="flex font-bold text-black
                   cursor-pointer transition-colors duration-300"
      >
        <img className="fill-current h-7 w-7 mr-2" src={carrito} />1
      </a>
    </div>
  );
};
export default CartWidget;
