import { useContext } from 'react';

import ItemForm from './ItemForm';
import CartContext from '../../../store/cart-context';

import classes from './Item.module.css';

const Item = (props) => {
  const cartContext = useContext(CartContext);

  const formattedPrice = `$${props.product.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartContext.addItem({
      id: props.product.id,
      name: props.product.name,
      amount: amount,
      price: props.product.price
    });
  };

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