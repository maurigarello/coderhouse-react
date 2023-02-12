import { collection, getDocs, query, where } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../firebaseconfig";

export const ProductsContext = createContext([]);

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cachedData, setCachedData] = useState({});

  // funcion asincrona para traer productos desde firebase //
  const getProducts = async () => {
    if (cachedData.products) {
      setProducts(cachedData.products);
    } else {
      const collectionRef = collection(db, "items");
      const snapshot = await getDocs(collectionRef);
      setProducts(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
      setCachedData({
        ...cachedData,
        products: snapshot.docs.map((d) => ({ id: d.id, ...d.data() })),
      });
    }
  };
  // funcion asincrona para traer productos filtrados desde firebase //
  const getCategoryProducts = async (categoryId) => {
    if (cachedData[categoryId]) {
      setProducts(cachedData[categoryId]);
    } else {
      const collectionRef = categoryId
        ? query(collection(db, "items"), where("category", "==", categoryId))
        : collection(db, "items");
      const snapshot = await getDocs(collectionRef);
      setProducts(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
      setCachedData({
        ...cachedData,
        [categoryId]: snapshot.docs.map((d) => ({ id: d.id, ...d.data() })),
      });
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        getProducts,
        getCategoryProducts,
        products,
        cachedData,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

