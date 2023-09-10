import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="main">
      <section className="section-newProduct">
        <div
          className="newProduct-desc flow"
          style={{ "--flow-spacer": "22px" }}
        >
          <p className="overline">New product</p>
          <p className="h1"> XX99 Mark II Headphones</p>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button link={4} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
