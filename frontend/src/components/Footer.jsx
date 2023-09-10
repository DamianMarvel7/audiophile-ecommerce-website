import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import iconFacebook from "../assets/shared/desktop/icon-facebook.svg";
import iconInstagram from "../assets/shared/desktop/icon-instagram.svg";
import iconTwitter from "../assets/shared/desktop/icon-twitter.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="footer">
      <footer className="grid">
        <img src={logo} alt="" />
        <ul className="secondary-nav">
          <li onClick={scrollToTop}>
            <Link to="/" className="subtitle">
              HOME
            </Link>
          </li>
          <li onClick={scrollToTop}>
            <Link to="/headphones" className="subtitle">
              HEADPHONES
            </Link>
          </li>
          <li onClick={scrollToTop}>
            <Link to="/speakers" className="subtitle">
              SPEAKERS
            </Link>
          </li>
          <li onClick={scrollToTop}>
            <Link to="/earphones" className="subtitle">
              EARPHONES
            </Link>
          </li>
        </ul>
        <p className="footer-text opa-50">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className="copyright opa-50"> Copyright 2021. All Rights Reserved</p>
        <div className="social flex">
          <img src={iconFacebook} alt="" />
          <img src={iconInstagram} alt="" />
          <img src={iconTwitter} alt="" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
