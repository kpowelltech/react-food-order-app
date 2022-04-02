import React, { useContext } from "react";
import CartContext from "../../store/cart-content";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem/CartItem";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemAddHandler = item => {}

  const cartItemRemoveHandler = id => {}

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onButtonClick}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onButtonClick}>
          Close
        </button>
        {cartCtx.items.length > 0 ? (
          <button className={styles.button}>Order</button>
        ) : null}
      </div>
    </Modal>
  );
};

export default Cart;
