import arrow from "../assets/arrow.png";

const Item = ({ id, name, stock, img }) => {
  return (
    <div className="relative shadow-2xl max-w-lg w-full transform duration-500 hover:-translate-y-2 cursor-pointer rounded-md">
      <div className="flex absolute right-0 top-0 w-10 h-10 bg-blue-600 text-gray-100">
       <img
       src={arrow}
       />
      </div>
      <div className="bg-no-repeat bg-center overflow-hidden mt-10 min-h-96">
        <img
          className="mx-auto p-5"
          src={img}
          alt=""
        />
      </div>
      <div className="p-8 mb-10 mt-2">
        <p className="text-xl text-gray-500">{id}</p>
        <h2 className="text-3xl mt-2">{name}</h2>
      </div>
    </div>
  );
};
export default Item;
