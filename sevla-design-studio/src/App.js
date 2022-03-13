import { Fragment } from 'react';
import Header from "./components/Layout/Header";
import Products from './components/Products/Products';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Products />
      </main>
    </Fragment>
  );
}

export default App;
