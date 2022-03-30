/*
* The main component that creates the application. It uses the React useState hook to manage the
* cart modal behaviour.
*/

import { useState } from 'react';

import Header from '../Layout/Header';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import CartProvider from '../../store/CartProvider';

// Returns a single page application
function Shopping() {

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

  // Returns layout of the home page
  // CartProvider manages and shares cart data, it does not render any UI components
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Products />
      </main>
    </CartProvider>
  );
}

export default Shopping;