import React, { useContext } from "react";
import data from "../data.json";
import { CartContext } from "../contexts/cartContext";

const CartDetails = ({ product }) => {
  const fullProduct = data.find((p) => p.id == product.id);

  const { addToCart } = useContext(CartContext);

  const handleDecrease = () => {
    addToCart(product.id, product.quantity - 1);
  };
  const handleIncrease = () => {
    addToCart(product.id, product.quantity + 1);
  };

  return (
    <div className="cart-details flex">
      <div className="cart-details-info flex">
        <img src={`./${fullProduct.image.mobile}`} alt="" />
        <div className="cart-details-info">
          <p className="bold">{fullProduct.name}</p>
          <p className="subtitle clr-gray">$ {fullProduct.price}</p>
        </div>
      </div>
      <div className="item-count">
        <button className="btn" onClick={handleDecrease}>
          -
        </button>
        <div>
          <p>{product.quantity}</p>
        </div>
        <button className="btn" onClick={handleIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartDetails;
