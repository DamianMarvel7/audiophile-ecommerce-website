import React, { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../contexts/cartContext";
import CartDetails from "./CartDetails";
import { Link } from "react-router-dom";

const CartModal = ({ toggleModal }) => {
  const { cart, deleteCart } = useContext(CartContext);

  const handleRemove = () => {
    deleteCart();
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  return (
    <div className="cart grid flow br-8">
      <div className="cart-header flex">
        <p className="h6">CART({cart.length})</p>
        <p className="underline clr-gray pointer" onClick={handleRemove}>
          Remove all
        </p>
      </div>
      <div className="cart-content grid">
        {cart.map((product) => (
          <CartDetails product={product} key={product.id} />
        ))}
      </div>
      <div className="cart-total flex">
        <div className="clr-gray">TOTAL</div>
        <div className="bold">$ {totalPrice}</div>
      </div>
      <Link to="/checkout" onClick={toggleModal}>
        <button className="btn btn1 subtilte">CHECKOUT</button>
      </Link>
    </div>
  );
};

export default CartModal;
