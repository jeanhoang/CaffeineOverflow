/*
* A component that creates the cart shown in a modal. 
* It uses React Context from CartContext to access user cart data.
*/

import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Modal from '../UI/Modal';

import classes from './Cart.module.css';

// Forwards props method pointer for closing the cart modal from inside the App component
const Cart = (props) => {
  // A variable that holds the current cart state; the component is re-evaluated whenever it changes
  const cartContext = useContext(CartContext);
  const totalAmountFormatted = `$${cartContext.totalAmount.toFixed(2)}`
  const hasItems = cartContext.items.length > 0; // A variable used to hide the order button if the cart is empty

  // A method that increases the item count by 1
  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  // A method that decreases the item count by 1
  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  // A variable used to store a list of cart items
  // Forwards props method pointer for adding and removing item
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)} // .bind works similar to .this
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  // Returns a modal containing the cart which dispkays a list of products, total price, close and order buttons
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmountFormatted}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
};

export default Cart;
