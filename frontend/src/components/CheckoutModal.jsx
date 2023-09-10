import { useContext, useState } from "react";
import confirmationIcon from "../assets/checkout/icon-order-confirmation.svg";
import CheckoutDetails from "./CheckoutDetails";
import { CartContext } from "../contexts/cartContext";

const CheckoutModal = ({ toggleModal }) => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const [showAllItems, setShowAllItems] = useState(false);

  const toggleShowAllItems = () => {
    setShowAllItems(!showAllItems);
  };

  const cartDisplay = showAllItems ? cart : cart.slice(0, 1);

  return (
    <div className="checkout-modal grid container br-8 flow">
      <img src={confirmationIcon} alt="" />
      <p className="h3">THANK YOU FOR YOUR ORDER</p>
      <p className="clr-gray">You will receive an email confirmation shortly</p>
      <div className="checkout-modal-content grid">
        <div className="checkout-modal-item-container">
          {cartDisplay.map((product, index) => (
            <CheckoutDetails product={product} key={product.id} />
          ))}
          {cart.length > 1 && (
            <p
              onClick={toggleShowAllItems}
              className="clr-gray bold pointer modal-showmore"
            >
              {showAllItems
                ? "Show less"
                : `and ${cart.length - 1} other item(s)`}
            </p>
          )}
        </div>
        <div className="checkout-modal-total">
          <p className="subtitle"> GRAND TOTAL</p>
          <p className="h6">$ {totalPrice}</p>
        </div>
      </div>
      <button className="btn btn1 subtitle" onClick={toggleModal}>
        BACK TO HOME
      </button>
    </div>
  );
};

export default CheckoutModal;
