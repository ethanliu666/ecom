import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQty, setTotalQty] = useState(0)

  const onAddToCart = (product) => {
    const productInCart = cartItems.find((item) => item.name === product.name);
    setTotalPrice((prev) => prev + product.price)
    setTotalQty((prev) => prev + 1)

    if (productInCart) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.name === product.name) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
      });

      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    toast.success(`1 ${product.name} added to cart!`);
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQty,
        onAddToCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);