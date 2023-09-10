import React, { useContext } from "react";
import data from "../data.json";
import { CartContext } from "../contexts/cartContext";

const CheckoutDetails = ({ product }) => {
  const fullProduct = data.find((p) => p.id == product.id);

  return (
    <div className="cart-details flex">
      <div className="cart-details-info flex">
        <img src={`./${fullProduct.image.mobile}`} alt="" />
        <div className="cart-details-info">
          <p className="bold">{fullProduct.name}</p>
          <p className="subtitle clr-gray">$ {fullProduct.price}</p>
        </div>
      </div>
      <div className="clr-gray bold">x{product.quantity}</div>
    </div>
  );
};

export default CheckoutDetails;
