import React from "react";
import { Link } from "react-router-dom";

const Button = ({ link }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="link-button-container" onClick={scrollToTop}>
      <Link to={`/${link}`} className="link-button">
        <button className="btn btn1 subtitle">SEE PRODUCT</button>
      </Link>
    </div>
  );
};

export default Button;
