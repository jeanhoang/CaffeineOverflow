/*
* A component that imports product data and creates a product list.
*/

import ProductData from '../../assets/Data/product-data'
import Card from '../UI/Card';
import Item from './Items/Item';

import classes from './AvailableProducts.module.css';

const AvailableProducts = () => {
  // A function that wraps each product in an Item component
  const productList = ProductData.map(product => <Item key={product.id} product={product} />);

  // Returns a product list wrapped in a card
  return (
    <section className={classes.products}>
      <Card>
        <ul>{productList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;