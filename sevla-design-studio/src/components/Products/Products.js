/*
* A component that creates the product summary heading and product list.
*/

import { Fragment } from 'react';

import classes from './Products.module.css'
import backgroundImage from '../../assets/background.png';

import ProductsSummary from "./ProductsSummary";
import AvailableProducts from "./AvailableProducts";

const Products = () => {

  // Returns a product summary heading and product list
  return (
    <Fragment>
      <div className={classes['main-image']}>
        <img src={backgroundImage} alt='Background' />
      </div>
      <ProductsSummary />
      <AvailableProducts />
    </Fragment>
  );
};

export default Products;