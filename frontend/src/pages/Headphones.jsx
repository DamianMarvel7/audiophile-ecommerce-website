import React from "react";
import NewProduct from "../components/NewProduct";
import data from "../data.json";
import BestAudio from "../components/BestAudio";
import Menu from "../components/Menu";

const Headphones = () => {
  const dataHeadphones = data
    .filter((d) => d.category === "headphones")
    .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1));
  //   console.log(dataHeadphones);
  return (
    <>
      <div className="hero1">
        <p className="h1">HEADPHONES</p>
      </div>
      <div className="main">
        <section className="section-new-product grid">
          {dataHeadphones.map((headphone) => (
            <NewProduct key={headphone.id} headphone={headphone} />
          ))}
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
    </>
  );
};

export default Headphones;
