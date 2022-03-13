import { Fragment } from 'react';

import Header from "./components/Layout/Header";
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Products />
      </main>
    </Fragment>
  );
}

export default App;
