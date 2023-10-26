import { React } from "react";
import "../CSS/style.css";
function Products({ cartData, setCartData }) {
  let totalPrice = 0;
  function cartDom(element) {
    totalPrice += element.price * element.qty;
    return (
      <div className="carSingle" key={element.id + "cart"}>
        <div className="cartImage">
          <img src={element.image} alt={element.name} />
        </div>
        <div className="cartName">{element.name}</div>
        <div className="cartPrice">${element.price}</div>
        <div className="cartQty">Quantity - {element.qty}</div>
        <button
          className="delete"
          onClick={() => {
            totalPrice -= element.price * element.qty;
            setCartData((prevCartData) => {
              const newCartData = { ...prevCartData };
              delete newCartData[element.id];
              return newCartData;
            });
          }}
        >
          delete
        </button>
      </div>
    );
  }

  const cart =
    cartData.length !== 0 ? (
      Object.values(cartData).map((element) => cartDom(element))
    ) : (
      <div className="carSingle">No Products Added to Cart</div>
    );

  return (
    <div>
      <div>{cart}</div>
      <div className="Total">Total ${totalPrice}</div>
    </div>
  );
}

export default Products;
