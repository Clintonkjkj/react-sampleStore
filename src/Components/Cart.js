import React from "react";
import Products from "./Product";

function Cart({ cartData, setCartData }) {
  return (
    <div>
      <Products cartData={cartData} setCartData={setCartData} />
    </div>
  );
}

export default Cart;
