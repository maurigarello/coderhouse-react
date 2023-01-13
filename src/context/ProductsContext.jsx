import { collection, getDocs, query, where } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../firebaseconfig";

export const ProductsContext = createContext([]);

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // funcion asincrona para traer productos desde firebase //
  const getProducts = async () => {
    const collectionRef = collection(db, "items");
    const snapshot = await getDocs(collectionRef);
    setProducts(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  };
  // funcion asincrona para traer productos filtrados desde firebase //
  const getCategoryProducts = async (categoryId) => {
    const collectionRef = categoryId ? query(collection(db, "items"), where("category", "==", categoryId)) :collection(db, "items");
    const snapshot = await getDocs(collectionRef);
    setProducts(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  return (
    <ProductsContext.Provider
      value={{
        getProducts,
        getCategoryProducts,
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
