import React, { useContext } from "react";

import CartContext from "../../../store/cart-content";
import styles from "./HeaderCartButton.module.css";

import CartIcon from "../../Cart/CartIcon/CartIcon";

const HeaderCartButton = (props) => {

  const cartCTX = useContext(CartContext);

  const numberOfCartItem = cartCTX.items.reduce((currNum, item) => {
    return currNum + item.amount
  }, 0);

  return (
    <button className={styles.button} onClick={props.onButtonClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
