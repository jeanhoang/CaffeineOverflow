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


  const formattedPrice = `$${props.product.ProductPrice.toFixed(2)}`;

  const productLink = `/products/${props.product.ProductName}`;
  // Adds an item to the cart
  // Called from ItemForm component by user form submission of adding a product to the cart
  const addToCartHandler = amount => {
    cartContext.addItem({
      id: props.product._id,
      name: props.product.ProductName,
      amount: amount,
      price: props.product.ProductPrice
    });
  };


  // Returns a single product list item with a name, description, price, number input, and add to cart button
  return (
    <div className={classes.item} key={props.product._id}>
      <div className='card'>
        <h3><Link to={{ pathname: productLink, state: { product: props.product } }} style={{ textDecoration: 'none' }}>{props.product.ProductName}</Link></h3>
        <div className={classes.description}>{props.product.ProductDescription}</div>
        <div className={classes.price}>{formattedPrice}</div>
        <img src={props.product.ProductImg} alt={props.product.ProductName} width="250" />
      </div>
      <div>
        <ItemForm id={props.product._id} onAddToCart={addToCartHandler} />
      </div>
    </div >
  );
};

export default Item;