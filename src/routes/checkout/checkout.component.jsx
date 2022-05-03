import "./checkout.styles.scss";
import {
  CartContext,
  addItemToCart,
  removeItemFromCart,
} from "../../contexts/cart.context";
import { useContext } from "react";
import "font-awesome/css/font-awesome.min.css";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckOut = () => {
  const { cartItems, addItemToCart, removeItemFromCart, cartTotal } =
    useContext(CartContext);

  const incrementHandler = (items) => {
    addItemToCart(items);
  };

  const decrementHandler = (items) => {
    removeItemFromCart(items);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((items) => {
        return <CheckoutItem key={items.id} cartItem={items} />;
      })}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default CheckOut;
