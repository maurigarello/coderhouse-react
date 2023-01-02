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
          },
        ]);
      }
    }
  };

  const removeList = () => {
    setCart([]);
  };

  const deleteItem = (itemId) => {
    const findedItem = cart.find((item) => item.id === itemId);
    if (findedItem) {
      if (findedItem.cantidad > 1) {
        const filteredItems = cart.filter((item) => item.id !== itemId);
        setCart([
          ...filteredItems,
          {
            ...findedItem,
            cantidad: findedItem.cantidad - 1,
          },
        ]);
      } else {
        const filteredItems = cart.filter((item) => item.id !== itemId);
        setCart(filteredItems);
      }
    }
  };

  const totalCart = () => {
    return cart.reduce((a, p) => a + p.cantidad, 0);
  };

  const totalCartPrice = () => {
    return cart.reduce((a, p) => a + p.cantidad * p.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeList,
        deleteItem,
        totalCart,
        totalCartPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
