import "./checkout-item.styles.scss";
import { useContext } from "react";
import {
  CartContext,
  addItemToCart,
  removeItemFromCart,
} from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const incrementHandler = (items) => {
    addItemToCart(items);
  };

  const decrementHandler = (items) => {
    removeItemFromCart(items);
  };

  const clearItemHandler = (cartItem) => {
    clearItemFromCart(cartItem);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decrementHandler(cartItem)}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={() => incrementHandler(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
