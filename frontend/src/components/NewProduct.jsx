import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const NewProduct = ({ headphone }) => {
  return (
    <div className="new-product grid">
      <picture className="br-8">
        <source
          srcSet={`./${headphone.categoryImage.mobile}`}
          media="(max-width: 768px)"
        />
        <source
          srcSet={`./${headphone.categoryImage.tablet}`}
          media="(max-width: 1240px)"
        />
        <img
          src={`./${headphone.categoryImage.desktop}`}
          alt="This is a picture"
          className="br-8"
        />
      </picture>
      <div className="new-product-desc flow">
        {headphone.new && <p className="overline clr-orange">NEW PRODUCT</p>}
        <p className="h2">{headphone.name}</p>
        <p>{headphone.description}</p>
        <Button link={headphone.id} />
      </div>
    </div>
  );
};

export default NewProduct;
