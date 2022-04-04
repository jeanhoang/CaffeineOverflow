/*
* A component that creates the default page layout of the site. It uses the React useState hook to manage the
* cart modal behaviour.
*/

import { Fragment, useState } from 'react';

import Header from './Header';
import Footer from './Footer'
import Cart from '../Cart/Cart';
import CartProvider from '../../store/CartProvider';

const Layout = (props) => {

  // useState hook used to manage the state of the page for displaying the cart; the component is re-evaluated whenever it changes
  // Returns two pointers that hold the current state and update the state, default set to hide
  const [cartIsShown, setCartIsShown] = useState(false);

  // Show cart
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  // Hide cart
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  // Returns default page layout of the site
  // CartProvider manages and shares cart data, it does not render any UI components
  return (
    <Fragment>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>{props.children}</main>
      </CartProvider>
      <Footer />
    </Fragment>
  );
};

export default Layout;
