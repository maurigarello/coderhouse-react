import Item from "./Item";


const ItemList = ({ products }) => {
  return (
    <>
      {products.map((i) => (
        <Item key={i.id} {...i} />
      ))}
    </>
  );
};

export default ItemList;
