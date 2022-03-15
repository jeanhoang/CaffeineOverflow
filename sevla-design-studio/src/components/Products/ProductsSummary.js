/*
* A component that creates the product summary heading.
*/

import classes from './ProductsSummary.module.css';

// Returns a product summary heading
const ProductsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Customized Products, Delivered To You</h2>
      <p>
        We Offer A Variety Of Personalized Items
      </p>
    </section>
  );
};

export default ProductsSummary;
