/*
* A component that creates the cart shown in a modal. 
* It uses React Context from CartContext to access user cart data.
*/

import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Modal from '../UI/Modal';

import classes from './Cart.module.css';

//import getStripe from '../../lib/getStripe';
import axios from 'axios';


import getStripe from '../../lib/getStripe';

// Forwards props method pointer for closing the cart modal from inside the App component
const Cart = (props) => {
  // A variable that holds the current cart state; the component is re-evaluated whenever it changes
  const cartContext = useContext(CartContext);
  const totalAmountFormatted = `$${cartContext.totalAmount.toFixed(2)}`
  const hasItems = cartContext.items.length > 0; // A variable used to hide the order button if the cart is empty

  //A function to load Stripe instance, send a POST request along with the response body
  //Redirect to Stripe checkout page upon clicking "Order"
  const handleCheckout = async () => {
    //Calling stripe instance
    const stripe = await getStripe();

    //Define items that are added to cart
    const addedItems = cartContext.items;

    //Sending POST request to the backend along with the response body
    const response = await fetch('http://localhost:5000/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addedItems),  
    });

    //If there's an error, returns nothing
    if (response.statusCode === 500) return;

    //Define data from the response body
    const data = await response.json();
    
    console.log(addedItems);

    //Redirect to Stripe chekcout page from id retrieved from response body
    stripe.redirectToCheckout({sessionId : data.session.id});
    console.log(data.session.id);

  }

  // A method that increases the item count by 1
  const cartItemAddHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  // A method that decreases the item count by 1
  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };


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
        {hasItems &&
          //Order button
          //Calling a function called handleCheckout
          <button className={classes.button} onClick={handleCheckout}>Order</button>}
      </div>
    </Modal>
  )
};

export default Cart;
