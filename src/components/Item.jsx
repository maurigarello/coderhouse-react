import { Link } from "react-router-dom";

const Item = ({ id, name, img, price }) => {
  return (
    <div className="relative shadow-2xl max-w-lg w-full transform duration-500 hover:-translate-y-2 cursor-pointer rounded-md">
      <div className="flex absolute right-0 top-0 w-24 h-10 bg-gray-700 hover:bg-black text-gray-100">
        <Link className="w-full text-center mt-1" to={`/item/${id}`}>
          <button className="p-px">Ver Detalle</button>
        </Link>
      </div>
      <div className="bg-no-repeat bg-center overflow-hidden mt-10 min-h-96">
        <img className="mx-auto p-5" src={img} alt={`esta es una imagen del producto: `} />
      </div>
      <div className="p-8 mb-10 mt-2">
        <p className="text-xl text-gray-500"></p>
        <h2 className="text-3xl mt-2">{name}</h2>
        <h2 className="text-gray-700 text-2xl mt-2">Precio: ${price}</h2>
      </div>
    </div>
  );
};
export default Item;
