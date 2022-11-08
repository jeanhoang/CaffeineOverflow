import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import CartContext from '../store/cart-context';
import ItemForm from '../components/Products/Items/ItemForm';
import classes from './DetailProductPage.module.css';


const DetailProductPage = () => {

  // Hook to get state sent from last page
  const location = useLocation();

  const ProductName = location.state.ProductName;
  const ProductID = location.state._id;
  const ProductPrice = location.state.ProductPrice;
  const ProductImg = location.state.ProductImg;
  const ProductLongDescription = location.state.ProductLongDescription;

  // A variable that holds the current cart state; the component is re-evaluated whenever it changes
  const cartContext = useContext(CartContext);

  // Adds an item to the cart
  // Called from ItemForm component by user form submission of adding a product to the cart
  const addToCartHandler = amount => {
    cartContext.addItem({
      id: ProductID,
      name: ProductName,
      amount: amount,
      price: ProductPrice
    });
  };

  return (
    <div className={classes.container}>

      <div className={classes.product} key={ProductID}>
        <div className={classes.gallery}>
          <img src={ProductImg} alt={ProductName} />
        </div>
        <div className={classes.details}>
          <h1>{ProductName}</h1>
          <br></br>
          <h2>${ProductPrice}</h2>
          <br></br>
          <p>{ProductLongDescription}</p>
          <br></br>
          <div>
            <ItemForm id={ProductID} onAddToCart={addToCartHandler} />
          </div>
          <form className={classes.action}>
            <Link to='/shopping'>Go back</Link>
          </form>
        </div>
      </div>

    </div>

  );
};

export default DetailProductPage;
