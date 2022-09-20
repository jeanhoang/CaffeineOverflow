/*
* A component that creates a single item of a list.
* It uses React Context from CartContext to access user cart data.
*/

import { useContext } from 'react';

import ItemForm from './ItemForm';
import CartContext from '../../../store/cart-context';

import classes from './Item.module.css';

import { Link } from "react-router-dom";

// Accepts props which contains a product from the product list array; the component is re-evaluated whenever it changes
const Item = (props) => {
  // A variable that holds the current cart state; the component is re-evaluated whenever it changes
  const cartContext = useContext(CartContext);
  
  //Format the price value to 2 decimal places
  const formattedPrice = `$${props.product.ProductPrice.toFixed(2)}`;

  // Adds an item to the cart
  // Called from ItemForm component by user form submission of adding a product to the cart
  const addToCartHandler = amount => {
    cartContext.addItem({
      id: props.product.id,
      name: props.product.ProductName,
      amount: amount,
      price: props.product.ProductPrice
    });
  };

  // Returns a single product list item with a name, description, price, number input, and add to cart button
  return (
    <div className={classes.item}>
      <div className='card'>
        <h3>{props.product.ProductName}</h3>
        <div className={classes.description}>{props.product.ProductDescription}</div>
        <div className={classes.price}>{formattedPrice}</div>
        <img src={props.product.ProductImg} alt='' />
      </div>
      <div>
        <ItemForm id={props.product.id} onAddToCart={addToCartHandler} />
      </div>
    </div>
  );
};

export default Item;
