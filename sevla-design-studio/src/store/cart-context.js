/*
* A JavaScript file that uses React Context to store the users cart globally.
*/

import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => { },
  removeItem: (id) => { }
});

export default CartContext;