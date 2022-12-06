import classes from './StartingPageContent.module.css';
import BannerContainer from './BannerContainer';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { Link } from "react-router-dom";



const StartingPageContent = () => {

  //Initializing product list
  const [productList, setProductList] = useState([]);

  //API to retrieve pro nduct list from backend
  const getProductListAPI = process.env.REACT_APP_GET_ALL_PRODUCTS_API;

  //Calling getProductList() function
  useEffect(() => getProductList(), []);


  //A function to fetch data from the backend using axios
  const getProductList = () => {
    axios
      .get(getProductListAPI)
      .then(response => {
       // console.log(response.data)
       setProductList(response.data);
      }).catch(error => {
        console.log(error);
      })
  }

  //Filter products based on ProductType = "Featured"
  const filteredList = productList.filter((product) => 
    product.ProductType === 'Featured'
  );

  const productLink = `/products/${filteredList.ProductName}`;

  //Debug console.log(filteredList);

  return (
    <>
      <BannerContainer/>
      <div className={classes['products-heading']}>
        <h2>Best Selling Products</h2>
        <p>Where your customization dreams come true</p>
      </div>

      <div className={classes['products-container']}>
        {filteredList.map(feature => (
          <div className={classes['product-card']}>
            <img src={feature.ProductImg} 
              className={classes['product-image']}>
            </img>

            <p><Link to={productLink} state={feature} style={{textDecoration:'none'}}>{feature.ProductName}</Link></p>
            <br></br>
            <p className={classes['short-desc']}>{feature.ProductDescription}</p>
            <p className={classes['product-price']}>${feature.ProductPrice}</p>

          </div>
        ))}
      </div> 

    </>

  );
};

export default StartingPageContent;
