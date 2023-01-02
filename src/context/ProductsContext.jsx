import { collection, getDocs } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../firebaseconfig";

export const ProductsContext = createContext([]);

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const collectionRef = collection(db, "items");
    const snapshot = await getDocs(collectionRef);
    setProducts(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  return (
    <ProductsContext.Provider
      value={{
        getProducts,
        products,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
