import ProductData from '../../assets/Data/product-data'

import classes from './AvailableProducts.module.css';

const AvailableProducts = () => {
  const productList = ProductData.map(product => <li>{product.name}</li>);

  return (
    <section className={classes.products}>
      <ul>{productList}</ul>
    </section>
  );
};

export default AvailableProducts;