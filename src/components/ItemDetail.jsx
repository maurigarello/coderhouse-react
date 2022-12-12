import ItemCount from "./ItemCount";

const ItemDetail = ({ id, name, description, img, category }) => {
  return (
    <div>
      <div className="bg-no-repeat bg-center overflow-hidden min-h-96">
        <img className="mx-auto p-5" src={img} alt="" />
      </div>
      <div className="p-8 mb-10 mt-2">
        <p className="text-xl text-gray-500">{id}</p>
        <h2 className="text-3xl mt-2">{name}</h2>
        <h2 className="text-2xl mt-2 text-gray-700">"{description}"</h2>
        <ItemCount />
      </div>
    </div>
  );
};
export default ItemDetail;
