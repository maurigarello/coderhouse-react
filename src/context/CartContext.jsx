import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    if (!cart.length) {
      setCart([
        {
          ...item,
          cantidad: quantity,
        },
      ]);
    } else {
      const findedItem = cart.find((e) => e.id === item.id);
      if (!findedItem) {
        setCart([
          ...cart,
          {
            ...item,
            cantidad: quantity,
          },
        ]);
      } else {
        const filteredItems = cart.filter((e) => e.id !== item.id);
        setCart([
          ...filteredItems,
          {
            ...findedItem,
            cantidad: findedItem.cantidad + quantity,
          }
        ])
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
