import { useEffect, useState } from "react";
import Item from "./Item";
import { PRODUCTS } from "../db/db.js";
import { useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      getProducts()
        .then((response) => {
          setProducts(response.filter((e) => e.category === categoryId));
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    } else {
      getProducts()
        .then((response) => {
          setProducts(response);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
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
    <>
      {isLoading === true ? (
        <div className="flex p-5 md:p-0 gap-10 mx-auto">
          <RotatingLines
            className=""
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </div>
      ) : (
        <div className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-center mx-auto">
          {products.map((i) => (
            <Item key={i.id} {...i} />
          ))}
        </div>
      )}
    </>
  );
};

export default ItemList;
