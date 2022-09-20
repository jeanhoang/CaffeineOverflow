import { useParams, useHistory } from 'react-router-dom';


import { useEffect, useState, useContext } from 'react';

import CartContext from '../store/cart-context';
import ItemForm from '../components/Products/Items/ItemForm';

import classes from './DetailProductPage.module.css';

import axios from 'axios';

const DetailProductPage = (props) => {

  // A variable that holds the current cart state; the component is re-evaluated whenever it changes
  const cartContext = useContext(CartContext);

  //Look for the specific ProductName
  const { ProductName, id, ProductPrice } = useParams();

  //Initializing product list
  const [productList, setProductList] = useState([]);

  //Using useHistory() to take user back to shopping page
  const { push } = useHistory();

  //Calling getProduct() function
  useEffect(() => getProduct(), []);

  //API to retrieve a specific Product from the Product List
  const detailProductAPI = `https://onlybackend-745.herokuapp.com/products/${ProductName}`;

  //Function to fetch the specific product from backend 
  const getProduct = () => {
    axios
      .get(detailProductAPI)
      .then(response => {
        console.log(response.data)
        setProductList(response.data);
        console.log(ProductName);

      }).catch(error => {
        console.log(error);
      })
  }

  // Adds an item to the cart
  // Called from ItemForm component by user form submission of adding a product to the cart
  const addToCartHandler = amount => {
    cartContext.addItem({
      id: id,
      name: ProductName,
      amount: amount,
      price: ProductPrice
    });
  };


  return (
    <div className={classes.container}>

      {productList.map((product) => (
        <div className={classes.product} key={product._id}>
          <div className={classes.gallery}>
            <img src={product.ProductImg} alt='' />
          </div>
          <div className={classes.details}>
            <h1>{product.ProductName}</h1>
            <br></br>
            <h2>${product.ProductPrice}</h2>
            <br></br>
            <p>{product.ProductDescription}</p>
            <br></br>
            <div>
              <ItemForm id={product.id} onAddToCart={addToCartHandler} />
            </div>
            <form>
              <button onClick={() => push("/shopping")}>Go back</button>
            </form>
          </div>
        </div>
      ))}

    </div>

  );
};

export default DetailProductPage;
