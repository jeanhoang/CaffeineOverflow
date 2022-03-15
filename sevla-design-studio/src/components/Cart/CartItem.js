/*
* A component that creates a cart item.
*/

import classes from './CartItem.module.css';

// Accepts props which contain a cart item
// Forwards props method pointer for adding and removing item amount from inside the Cart component
const CartItem = (props) => {
  const formattedPrice = `$${props.price.toFixed(2)}`;

  // Returns a cart item with a name, price, amount, add, and remove buttons
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{formattedPrice}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button className={classes.remove} onClick={props.onRemove}>−</button>
        <button className={classes.add} onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
