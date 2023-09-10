import { Link } from "react-router-dom";
import iconHeadphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import iconSpeakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import iconEarphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

const Menu = () => {
  const handleClick = (e) => {
    e.stopPropagation();
    const menuContainerElm = document.querySelector(".menu-container");
    const menuElm = menuRef.current;
    if (!menuElm.contains(e.target)) {
      menuContainerElm.classList.toggle("opened");
    }
  };
  return (
    <>
      <Link to="/headphones" onClick={handleClick}>
        <div className="menu-card grid">
          <img src={iconHeadphones} alt="" className="menu-img" />
          <div className="menu-card__desc">
            <p className="h6">HEADPHONES</p>
            <p>Shop</p>
          </div>
        </div>
      </Link>

      <Link to="/speakers" onClick={handleClick}>
        <div className="menu-card grid">
          <img src={iconSpeakers} alt="" className="menu-img" />
          <div className="menu-card__desc">
            <p className="h6">SPEAKERS</p>
            <p>Shop</p>
          </div>
        </div>
      </Link>

      <Link to="/earphones" onClick={handleClick}>
        <div className="menu-card grid">
          <img src={iconEarphones} alt="" className="menu-img" />
          <div className="menu-card__desc">
            <p className="h6">EARPHONES</p>
            <p>Shop</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Menu;
