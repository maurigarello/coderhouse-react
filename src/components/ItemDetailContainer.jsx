import ItemDetail from "./ItemDetail";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { ProductsContext } from "../context/ProductsContext";

const ItemDetailContainer = () => {
  const { products, getProducts } = useContext(ProductsContext);
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState([]);
  const { id } = useParams();

  // uso del useeffect para traer los productos desde la funcion exportada por context y luego filtrar por id, teniendo como dependencia el mismo //
  useEffect(() => {
    if (!products.length) {
      getProducts()
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // eslint-disable-next-line
      setItem(products.find((e) => e.id == id));
      setIsLoading(false);
    }
    // eslint-disable-next-line
  }, [id, products]);

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
        <div className="relative shadow-2xl max-w-lg w-full rounded-md mx-auto">
          <ItemDetail item={item} />
        </div>
      )}
    </>
  );
};
export default ItemDetailContainer;
