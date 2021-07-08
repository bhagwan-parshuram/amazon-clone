import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  let CheckoutProducts = [];
  for (var i = 0; basket && i < basket.length; i++) {
    CheckoutProducts.push(
      <CheckoutProduct
        title={basket[i].title}
        image={basket[i].image}
        price={basket[i].price}
        rating={basket[i].rating}
      />
    );
  }
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/BAU/Homenew/Final4/123_PC.gif"
          alt="Advertisement"
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
        </div>
        {CheckoutProducts}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
