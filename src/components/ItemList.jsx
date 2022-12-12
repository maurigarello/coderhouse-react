import { useEffect, useState } from "react";
import Item from "./Item";
import { PRODUCTS } from "../db/db.js";
import { useParams } from "react-router-dom";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();
  console.log(categoryId, "soy el categoryId");

  useEffect(() => {
    if (categoryId) {
      getProducts()
        .then((response) => {
          setProducts(response.filter((e) => e.category === categoryId));
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      getProducts()
        .then((response) => {
          setProducts(response);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [categoryId]);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(PRODUCTS);
      }, 2000);
    });
  };

  return (
    <div className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
      {products.map((i) => (
        <Item key={i.id} {...i} />
      ))}
    </div>
  );
};

export default ItemList;
