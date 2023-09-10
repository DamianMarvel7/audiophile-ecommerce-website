import bestGear1 from "../assets/shared/mobile/image-best-gear.jpg";
import bestGear2 from "../assets/shared/tablet/image-best-gear.jpg";
import bestGear3 from "../assets/shared/desktop/image-best-gear.jpg";

const BestAudio = () => {
  return (
    <div className="best-audio grid">
      <div className="best-audio-desc flow">
        <p className="h4">
          Bringing you the <span>best</span> audio gear
        </p>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <picture className="br-8">
        <source srcSet={bestGear1} media="(max-width: 768px)" />
        <source srcSet={bestGear2} media="(max-width: 1440px)" />
        <img src={bestGear3} alt="This is a picture" className="br-8" />
      </picture>
    </div>
  );
};

export default BestAudio;
