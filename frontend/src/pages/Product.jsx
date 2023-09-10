import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import data from "../data.json";
import ProductDetails from "../components/ProductDetails";
import Menu from "../components/Menu";
import BestAudio from "../components/BestAudio";
import RecCard from "../components/RecCard";
import CartModal from "../components/CartModal";
import GoBack from "../components/GoBack";

const Product = () => {
  const { id } = useParams();
  const product = data.filter((d) => d.id == id)[0];

  return (
    <div className="main main-product ">
      <section>
        <GoBack />
        <ProductDetails product={product} />
      </section>
      <section>
        <div className="flow">
          <div className="product-desc">
            <div className="product-features flow">
              <p className="h3">FEATURES</p>
              <p>{product.features.split(".").slice(0, 3)}.</p>
              <p>{product.features.split(".").slice(3, -1)}.</p>
            </div>
          </div>
          <div className="product-box flow grid">
            <p className="h3">IN THE BOX</p>
            <div className="product-box-list">
              {product.includes.map((include, index) => (
                <div key={index} className="flex">
                  <span className="box-quantity">{include.quantity}X</span>
                  <span className="box-item">{include.item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="product-gallery grid">
          <picture className="br-8">
            {/* <source
              srcSet={`./src/${product.gallery.first.mobile}`}
              media="(max-width: 768px)"
            />
            <source
              srcSet={`./src/${product.gallery.first.tablet}`}
              media="(max-width: 1140px)"
            /> */}
            <img
              src={`./${product.gallery.first.mobile}`}
              alt="This is a picture"
              className="br-8"
            />
          </picture>
          <picture className="br-8">
            {/* <source
              srcSet={`./src/${product.gallery.second.mobile}`}
              media="(max-width: 768px)"
            />
            <source
              srcSet={`./src/${product.gallery.second.tablet}`}
              media="(max-width: 1140px)"
            /> */}
            <img
              src={`./${product.gallery.second.mobile}`}
              alt="This is a picture"
              className="br-8"
            />
          </picture>
          <picture className="br-8">
            {/* <source
              srcSet={`./src/${product.gallery.third.mobile}`}
              media="(max-width: 710px)"
            />
            <source
              srcSet={`./src/${product.gallery.third.tablet}`}
              media="(max-width: 1140px)"
            /> */}
            <img
              src={`./${product.gallery.third.mobile}`}
              alt="This is a picture"
              className="br-8"
            />
          </picture>
        </div>
      </section>
      <section>
        <div className="product-rec flow">
          <p className="h3">YOU MAY ALSO LIKE</p>
          <div className="product-rec-list grid">
            {product.others.map((product, index) => (
              <RecCard key={index} product={product} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="menu flex container1 no-padding">
          <Menu />
        </div>
      </section>
      <section>
        <BestAudio />
      </section>
    </div>
  );
};

export default Product;
