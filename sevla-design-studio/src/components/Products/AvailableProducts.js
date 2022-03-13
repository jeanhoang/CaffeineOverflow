import ProductData from '../../assets/Data/product-data'
import Card from '../UI/Card';
import Item from './Items/Item';

import classes from './AvailableProducts.module.css';

const AvailableProducts = () => {
  const productList = ProductData.map(product => <Item key={product.id} product={product} />);

  return (
    <section className={classes.products}>
      <Card>
        <ul>{productList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;