import React from "react";
import data from "../data.json";
import NewProduct from "../components/NewProduct";
import Menu from "../components/Menu";
import BestAudio from "../components/BestAudio";

const Earphones = () => {
  const dataEarphones = data
    .filter((d) => d.category === "earphones")
    .sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1));
  //   console.log(dataEarphones);
  return (
    <>
      <div className="hero1">
        <p className="h1">EARPHONES</p>
      </div>
      <div className="main">
        <section className="section-new-product grid">
          {dataEarphones.map((headphone) => (
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

export default Earphones;
