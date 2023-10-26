import React from "react";
import { productContext } from "./Components/ProductList";
import Cart from "./Components/Cart";
import "./CSS/style.css";

function Main() {
  const productList = React.useContext(productContext);
  const [cartData, setCartData] = React.useState([]);
  const productElements = productList.map((element) => (
    <div className="productSingle" key={element.id}>
      <div className="imageDiv">
        <img className="productImage" alt={element.name} src={element.image} />
      </div>

      <div className="name">{element.name}</div>
      <div className="price">$ {element.price}</div>
      <button
        className="addBtn"
        onClick={() => {
          if (!cartData[element.id]) {
            setCartData({
              ...cartData,
              [element.id]: { ...element, qty: 1 },
            });
          } else {
            setCartData({
              ...cartData,
              [element.id]: {
                ...cartData[element.id],
                qty: cartData[element.id].qty + 1,
              },
            });
          }
        }}
      >
        Add to Cart
      </button>
    </div>
  ));

  return (
    <div>
      <div className="main-banner">ECart Project</div>
      <div className="Main">
        <div className="left-bar">
          <div className="products"> {productElements}</div>
        </div>
        <div className="cart">
          <Cart cartData={cartData} setCartData={setCartData} />
        </div>
      </div>
    </div>
  );
}

export default Main;
