import { useHistory, useLocation } from 'react-router-dom';
import { useContext } from 'react';

import CartContext from '../store/cart-context';
import ItemForm from '../components/Products/Items/ItemForm';
import classes from './DetailProductPage.module.css';


const DetailProductPage = () => {

  //Using useHistory() to take user back to shopping page
  const { push } = useHistory();

  // Hook to get state sent from last page
  const location = useLocation();

  const ProductName = location.state.product.ProductName;
  const ProductID = location.state.product._id;
  const ProductPrice = location.state.product.ProductPrice;
  const ProductImg = location.state.product.ProductImg;
  const ProductLongDescription = location.state.product.ProductLongDescription;

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
          <form>
            <button onClick={() => push("/shopping")}>Go back</button>
          </form>
        </div>
      </div>

    </div>

  );
};

export default DetailProductPage;
