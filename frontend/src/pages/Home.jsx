import React from "react";
import Menu from "../components/Menu";
import zx9Speaker1 from "../assets/home/mobile/image-speaker-zx9.png";
import zx9Speaker2 from "../assets/home/mobile/image-speaker-zx9.png";
import zx9Speaker3 from "../assets/home/mobile/image-speaker-zx9.png";

import yx1Earphones1 from "../assets/home/mobile/image-earphones-yx1.jpg";
import yx1Earphones2 from "../assets/home/mobile/image-earphones-yx1.jpg";
import yx1Earphones3 from "../assets/home/mobile/image-earphones-yx1.jpg";
import BestAudio from "../components/BestAudio";
import { Link } from "react-router-dom";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="main">
      <section>
        <div className="menu flex container1 no-padding">
          <Menu />
        </div>
      </section>
      <section className="flow">
        <div className="rec-product1 grid container br-8">
          <picture>
            <source srcSet={zx9Speaker1} media="(max-width: 468px)" />
            <source srcSet={zx9Speaker2} media="(max-width: 768px)" />
            <img src={zx9Speaker3} alt="This is a picture" />
          </picture>
          <div className="rec-product1-desc flow">
            <p className="h1">ZX9 SPEAKER</p>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to="/6" onClick={scrollToTop}>
              <button className="btn btn4 subtitle">SEE PRODUCT</button>
            </Link>
          </div>
        </div>
        <div className="rec-product2 flow br-8">
          <p className="h4">ZX7 SPEAKER</p>
          <Link to="/5" onClick={scrollToTop}>
            <button className="btn btn2 subtitle">SEE PRODUCT</button>
          </Link>
        </div>
        <div className="rec-product3 grid">
          <picture className="br-8">
            <source srcSet={yx1Earphones1} media="(max-width: 768px)" />
            <source srcSet={yx1Earphones2} media="(max-width: 1440px)" />
            <img src={yx1Earphones3} alt="This is a picture" className="br-8" />
          </picture>
          <div className="rec-product3-desc br-8">
            <div className="flow">
              <p className="h4">YX1 EARPHONES</p>
              <Link to="/1" onClick={scrollToTop}>
                <button className="btn btn2 subtitle">SEE PRODUCT</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <BestAudio />
      </section>
    </div>
  );
};

export default Home;
