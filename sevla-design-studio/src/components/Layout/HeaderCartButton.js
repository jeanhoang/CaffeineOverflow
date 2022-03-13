import { useContext } from 'react';

import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';
import cartIcon from '../../assets/cart.png';

const HeaderCartButton = props => {
  const cartContext = useContext(CartContext);

  let numberOfCartItems = 0;

  for (let i = 0; i < cartContext.items.length; i++) {
    numberOfCartItems += cartContext.items[i].amount;
  }

  return <button className={classes.button} onClick={props.onClick} >
    <span className={classes.icon}>
      <img src={cartIcon} alt='Cart' />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberOfCartItems}</span>
  </button>
};

export default HeaderCartButton;