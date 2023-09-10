import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to add items to the cart
  const addToCart = (id, quantity, price) => {
    if (quantity === 0) {
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
    } else {
      const itemIndex = cart.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        const updatedCart = cart.map((item, index) => {
          if (index === itemIndex) {
            return { ...item, quantity: quantity };
          } else {
            return item;
          }
        });
        setCart(updatedCart);
      } else {
        const newItem = { id, quantity, price };
        setCart([...cart, newItem]);
      }
    }
  };

  const deleteCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
