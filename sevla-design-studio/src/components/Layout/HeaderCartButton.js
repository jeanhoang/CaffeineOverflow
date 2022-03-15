/*
* A component that creates the cart button within the header.
* It uses React Context from CartContext to access user cart data.
*/

import { useContext } from 'react';

import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';
import cartIcon from '../../assets/cart.png';

// Accepts props method pointer for closing the cart modal from inside the App component
const HeaderCartButton = props => {

  // A variable that holds the current cart state; the component is re-evaluated whenever it changes
  const cartContext = useContext(CartContext);

  // A variable used to display the total number of cart items
  let numberOfCartItems = 0;
  for (let i = 0; i < cartContext.items.length; i++) {
    numberOfCartItems += cartContext.items[i].amount;
  }

  // Returns the cart button with an icon
  return <button className={classes.button} onClick={props.onClick} >
    <span className={classes.icon}>
      <img src={cartIcon} alt='Cart' />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberOfCartItems}</span>
  </button>
};

export default HeaderCartButton;