import React from "react";
import { Link } from "react-router-dom";
import data from "../data.json";
import Button from "./Button";

const RecCard = ({ product }) => {
  const idFinder = (slug) => {
    return data.find((d) => d.slug == slug).id;
  };

  return (
    <div className="product-rec-card flow">
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
      <p className="h5">{product.name}</p>
      <Button link={idFinder(product.slug)} />
    </div>
  );
};

export default RecCard;
