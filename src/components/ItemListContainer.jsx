import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { ProductsContext } from "../context/ProductsContext.jsx";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { products, getCategoryProducts, cachedData } =
    useContext(ProductsContext);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ prevCategoryId, setPrevCategoryId ] = useState(null);
  const { categoryId } = useParams();

  // uso de useeffect para traer los productos filtrados por categoria y tener como dependencia el categoryID //
  useEffect(() => {
    if (categoryId !== prevCategoryId) {
      setPrevCategoryId(categoryId);
      setIsLoading(true);
      getCategoryProducts(categoryId)
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setIsLoading(false);
    }
    // eslint-disable-next-line
  }, [categoryId, products, cachedData]);

  
  return (
    <div className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
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
        <div className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-center mx-auto">
          <ItemList products={products} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
