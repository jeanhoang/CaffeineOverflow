/*
* A component that imports product data and creates a product list.
*/

import Item from './Items/Item';

import classes from './AvailableProducts.module.css';

import { useState, useEffect } from 'react';

import axios from 'axios';
import Grid from '@mui/material/Grid';

const AvailableProducts = () => {

  //Initializing product list
  const [productList, setProductList] = useState([]);

  //API to retrieve product list from backend
  const getProductListAPI = process.env.REACT_APP_GET_ALL_PRODUCTS_API;

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
  const displayProductList = productList.map((product) => <Grid item xs={4}><Item key={product._id} product={product} /></Grid>);


  // Returns a product list wrapped in a card
  return (
    <section className={classes.products}>
      <Grid container spacing={2} data-testid="item-element">
        {displayProductList}
      </Grid>
    </section>
  );
};

export default AvailableProducts;