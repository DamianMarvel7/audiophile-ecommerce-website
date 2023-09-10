import React, { useContext, useState } from "react";
import GoBack from "../components/GoBack";
import codIcon from "../assets/checkout/icon-cash-on-delivery.svg";
import { CartContext } from "../contexts/cartContext";
import CheckoutDetails from "../components/CheckoutDetails";
import CheckoutModal from "../components/CheckoutModal";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const [selectedValue, setSelectedValue] = useState("emoney");

  return (
    <div>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <CheckoutModal toggleModal={toggleModal} />
        </div>
      )}
      <div className="main checkout">
        <section className="section-checkout">
          <GoBack />
          <div className="checkout-inside grid">
            <div className="checkout-content flow">
              <p className="h3">CHECKOUT</p>
              <div className="checkout-details grid">
                <p className="subtitle clr-orange">BILLING DETAILS</p>
                <div className="checkout-input-container grid">
                  <div className="checkout-input grid">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Alexei Ward"
                    />
                  </div>
                  <div className="checkout-input grid">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="alexei@mail.com"
                    />
                  </div>
                  <div className="checkout-input grid">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="+62 897-1223-321"
                    />
                  </div>
                </div>
              </div>
              <div className="checkout-shipping grid">
                <p className="subtitle clr-orange">SHIPPING INFO</p>
                <div className="checkout-input-container grid">
                  <div className="checkout-input grid">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="1137 Williams Avenue"
                    />
                  </div>
                  <div className="checkout-input grid">
                    <label htmlFor="zipcode">ZIP Code</label>
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      placeholder="10001"
                    />
                  </div>
                  <div className="checkout-input grid">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="New York"
                    />
                  </div>
                  <div className="checkout-input grid">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      placeholder="United States"
                    />
                  </div>
                </div>
              </div>
              <div className="checkout-payment grid">
                <p className="subtitle clr-orange">PAYMENT DETAILS</p>
                <div className="checkout-input-container grid">
                  <div className="bold">Payment Method</div>
                  <div className="checkout-radio-container flex">
                    <input
                      type="radio"
                      value="emoney"
                      checked={selectedValue === "emoney"}
                      onChange={() => setSelectedValue("emoney")}
                      name="payment"
                      id="emoney"
                    />
                    <label htmlFor="emoney">E-Money</label>
                  </div>
                  <div className="checkout-radio-container flex">
                    <input
                      type="radio"
                      value="cod"
                      checked={selectedValue === "cod"}
                      onChange={() => setSelectedValue("cod")}
                      name="payment"
                      id="cod"
                    />
                    <label htmlFor="cod">Cash on Delivery</label>
                  </div>
                </div>
                {selectedValue === "emoney" ? (
                  <div className="checkout-input-container emoney grid">
                    <div className="checkout-input emoney-input grid">
                      <label htmlFor="emoney-number">e-Money Number</label>
                      <input
                        type="text"
                        name="emoney-number"
                        id="emoney-number"
                        placeholder="235821115"
                      />
                    </div>
                    <div className="checkout-input emoney-pin grid">
                      <label htmlFor="emoney-pin">e-Money PIN</label>
                      <input
                        type="text"
                        name="emoney-pin"
                        id="emoney-pin"
                        placeholder="6891"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="cod-text flex">
                    <img src={codIcon} alt="" />
                    <p>
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="checkout-summary grid flow">
              <p className="h6">SUMMARY</p>
              {cart.map((product) => (
                <CheckoutDetails product={product} key={product.id} />
              ))}
              <div className="checkout-total flex">
                <p className="subtitle clr-gray">TOTAL</p>
                <p className="bold">$ {totalPrice}</p>
              </div>
              <div className="checkout-total flex">
                <p className="subtitle clr-gray">SHIPPING</p>
                <p className="bold">$ 50</p>
              </div>
              <div className="checkout-total flex">
                <p className="subtitle clr-gray ">VAT (INCLUDED)</p>
                <p className="bold">$ {totalPrice / 5}</p>
              </div>
              <div className="checkout-total flex">
                <p className="subtitle clr-gray">GRAND TOTAL</p>
                <p className="clr-orange bold">$ {totalPrice + 50}</p>
              </div>
              <button className="btn btn1 subtitle" onClick={toggleModal}>
                CONTINUE & PAY
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Checkout;
