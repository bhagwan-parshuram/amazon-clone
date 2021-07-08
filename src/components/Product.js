import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";
function Product({ title, price, image, rating }) {
  let rate = [];
  for (var i = 0; i < rating; i++) {
    rate.push("⭐");
  }
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    //dispatch the item to the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
          <p>{rate}</p>
        </p>
      </div>
      <img src={image} alt="This is the product" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
