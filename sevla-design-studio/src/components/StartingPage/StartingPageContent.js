import classes from './StartingPageContent.module.css';
import backgroundImage from '../../assets/background.png';
import BannerContainer from './BannerContainer';
import axios from 'axios';
import { useState, useEffect } from 'react';
import HomeProduct from './HomeProduct';



const StartingPageContent = () => {

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

  return (
    <>
      <BannerContainer/>
      <div className={classes['products-heading']}>
        <h2>Best Selling Products</h2>
        <p>Where your customization dreams come true</p>
      </div>

      <div className={classes['products-container']}>
        {productList.map((product) => <HomeProduct key={product._id} product={product} /> )}
      </div>


    </>

  );
};

export default StartingPageContent;
