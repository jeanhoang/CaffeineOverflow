/*
* A component that imports product data and creates a product list.
*/

import Card from '../UI/Card';
import Item from './Items/Item';

import classes from './AvailableProducts.module.css';

import { useState, useEffect } from 'react';

import axios from 'axios';

const AvailableProducts = () => {

  //Initializing product list
  const [productList, setProductList] = useState([]);

  //API to retrieve product list from backend
  const getProductListAPI = 'https://onlybackend-745.herokuapp.com/products';

  //Calling getProductList() function
  useEffect(() => getProductList(), []);

  //A function to fetch data from the backend using axios
  const getProductList = () => {
    axios
      .get(getProductListAPI)
      .then(response => {
        console.log(response.data)
        setProductList(response.data);

      }).catch(error => {
        console.log(error);
      })
  }

  // A function that wraps each product in an Item component
  const displayProductList = productList.map((product) => <Item key={product._id} product={product} />);


  // Returns a product list wrapped in a card
  return (
    <section className={classes.products}>
      <Card>
        <div>
          {displayProductList}
        </div>
      </Card>
    </section>
  );
};

export default AvailableProducts;
