import Home from "pages/Home";
import React from "react";
import "./EmptyCart.css";

const EmptyCart = () => {
  return (
    <div className="EmptyCart">
      <p>Your Cart is Empty</p>
      <p>Looks like you haven't added anything to your cart yet.</p>
      <a className="btn btn-primary" href="/">
       Home
      </a>
    </div>
  );
};
export default EmptyCart;


