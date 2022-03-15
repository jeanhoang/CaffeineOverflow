/*
* A component that creates the product summary heading and product list.
*/

import { Fragment } from 'react';
import ProductsSummary from "./ProductsSummary";
import AvailableProducts from "./AvailableProducts";

const Products = () => {

  // Returns a product summary heading and product list
  return (
    <Fragment>
      <ProductsSummary />
      <AvailableProducts />
    </Fragment>
  );
};

export default Products;