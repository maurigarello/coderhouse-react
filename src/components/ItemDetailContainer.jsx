import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../db/db";
import { RotatingLines } from "react-loader-spinner";

const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const getProducts = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // eslint-disable-next-line
          resolve(PRODUCTS.find((e) => e.id == id));
        }, 2000);
      });
    };

    getProducts()
      .then((response) => {
        setItem(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [id]);

  const { name, stock, img, description, category } = item;

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center align-center mx-auto">
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
        <div className="relative shadow-2xl max-w-lg w-full cursor-pointer rounded-md mx-auto mt-0">
          <ItemDetail
            name={name}
            stock={stock}
            img={img}
            description={description}
            category={category}
          />
        </div>
      )}
    </>
  );
};
export default ItemDetailContainer;
