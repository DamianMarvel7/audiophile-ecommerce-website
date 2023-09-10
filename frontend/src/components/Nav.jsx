import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/shared/desktop/logo.svg";
import iconCart from "../assets/shared/desktop/icon-cart.svg";

import iconHamburger from "../assets/shared/tablet/icon-hamburger.svg";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import Home from "../pages/Home";
import Hero from "./Hero";
import Menu from "./Menu";
import Footer from "./Footer";
import CartModal from "./CartModal";

const Nav = () => {
  const menuRef = useRef(null);
  const handleClick = (e) => {
    e.stopPropagation();
    const menuContainerElm = document.querySelector(".menu-container");
    const menuElm = menuRef.current;
    if (!menuElm.contains(e.target)) {
      menuContainerElm.classList.toggle("opened");
    }
  };

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div id="nav">
      <div
        className="header"
        style={currentPath !== "/" ? { background: "black" } : {}}
      >
        <header className="flex">
          <img
            src={iconHamburger}
            onClick={handleClick}
            alt=""
            className="icon-hamburger"
          />
          <Link to="/">
            <img src={logo} alt="" className="logo" />
          </Link>

          <nav>
            <ul className="primary-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="headphones">Headphones</Link>
              </li>
              <li>
                <Link to="speakers">Speakers</Link>
              </li>
              <li>
                <Link to="earphones">Earphones</Link>
              </li>
            </ul>
          </nav>
          <img
            src={iconCart}
            alt=""
            onClick={toggleModal}
            className="pointer"
          />
        </header>
        <div className="menu-container" onClick={handleClick}>
          <div className="menu flex container1" ref={menuRef}>
            <Menu />
          </div>
        </div>
        {currentPath === "/" ? <Hero /> : <></>}
      </div>

      <main>
        {modal && (
          <div className="modal">
            <div className="overlay" onClick={toggleModal}></div>
            <CartModal toggleModal={toggleModal} />
          </div>
        )}

        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Nav;
