import classes from './Item.module.css';

const Item = (props) => {

  const formattedPrice = `$${props.product.price.toFixed(2)}`;

  return (
    <li className={classes.item}>
      <div>
        <h3>{props.product.name}</h3>
        <div className={classes.description}>{props.product.description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
    </li>
  );
};

export default Item;