import React from "react";
import { useStateValue } from "../StateProvider";
import "./CheckoutProduct.css";
function CheckoutProduct({ image, title, rating, price }) {
  let rate = [];
  for (var i = 0; i < rating; i++) {
    rate.push("⭐");
  }
  const [{ basket }, dispatch] = useStateValue();
  function removeFun() {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      title: title,
    });
  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">{rate}</div>
        <button onClick={removeFun}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
