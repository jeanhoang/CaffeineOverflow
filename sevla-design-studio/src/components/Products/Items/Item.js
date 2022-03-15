/*
* A component that creates a single item of a list.
* It uses React Context from CartContext to access user cart data.
*/

import { useContext } from 'react';

import ItemForm from './ItemForm';
import CartContext from '../../../store/cart-context';

import classes from './Item.module.css';

// Accepts props which contains a product from the product list array; the component is re-evaluated whenever it changes
const Item = (props) => {
  // A variable that holds the current cart state; the component is re-evaluated whenever it changes
  const cartContext = useContext(CartContext);

  const formattedPrice = `$${props.product.price.toFixed(2)}`;


  // Adds an item to the cart
  // Called from ItemForm component by user form submission of adding a product to the cart
  const addToCartHandler = amount => {
    cartContext.addItem({
      id: props.product.id,
      name: props.product.name,
      amount: amount,
      price: props.product.price
    });
  };

  // Returns a single product list item with a name, description, price, number input, and add to cart button
  return (
    <li className={classes.item}>
      <div>
        <h3>{props.product.name}</h3>
        <div className={classes.description}>{props.product.description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <ItemForm id={props.product.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Item;