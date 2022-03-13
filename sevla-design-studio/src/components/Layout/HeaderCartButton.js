import classes from './HeaderCartButton.module.css';
import cartIcon from '../../assets/cart.png';

const HeaderCartButton = props => {
  return <button className={classes.button} onClick={props.onClick} >
    <span className={classes.icon}>
      <img src={cartIcon} alt='Cart' />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>3</span>
  </button>
};

export default HeaderCartButton;