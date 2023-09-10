import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";

const ProductDetails = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [itemCount, setItemCount] = useState(1);

  useEffect(() => {
    setItemCount(1);
  }, [product]);

  const handleAdd = () => {
    setItemCount(itemCount + 1);
  };

  const handleDecrease = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };

  const handleClick = () => {
    addToCart(product.id, itemCount, product.price);
  };

  return (
    <div className="product-details grid">
      <picture className="br-8">
        <source
          srcSet={`./${product.image.mobile}`}
          media="(max-width: 768px)"
        />
        <source
          srcSet={`./${product.image.tablet}`}
          media="(max-width: 1140px)"
        />
        <img
          src={`./${product.image.desktop}`}
          alt="This is a picture"
          className="br-8"
        />
      </picture>
      <div className="product-details-desc flow">
        {product.new && <p className="overline clr-orange">NEW PRODUCT</p>}
        <p className="h2">{product.name}</p>
        <p>{product.description}</p>
        <p className="h6">$ {product.price}</p>
        <div className="product-cart flex">
          {/* <input type="number" name="" id="" /> */}
          <div className="item-count">
            <button onClick={handleDecrease} className="btn">
              -
            </button>
            <div>
              <p>{itemCount}</p>
            </div>
            <button onClick={handleAdd} className="btn">
              +
            </button>
          </div>
          <button
            className="btn btn1 subtitle"
            onClick={handleClick}
            disabled={itemCount === 0}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
