/*
* A component that manages the users cart and provides data to all child components. 
* It uses React Context from CartContext to modify user cart data and the React useReducer hook to add or remove cart items.
*/

import { useReducer } from 'react';

import CartContext from './cart-context';

// Check local storage
const previousCartItems = JSON.parse(localStorage.getItem('cartItems'));
const previousCartTotal = JSON.parse(localStorage.getItem('totalAmount'));

// Default values of the cart used for in the useReducer hook
const defaultCartState = {
  items: previousCartItems ?? [],
  totalAmount: previousCartTotal ?? 0,
};

// The reducer method in the useReducer hook that automatically recieves state and action variables 
// and updates the cart accordingly. 
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    // Step 1. Update total price in cart
    const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);

    // Step 2. Check if item already existsin order to update as a new item or additional item
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id // If match found,  returns index
    );

    // Returns an existing cart item or null
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    // Step 3. Update cart as either new item or addiional item
    if (existingCartItem) { // If item exists
      const updatedItem = { // Create new item
        ...existingCartItem, // Copy cart item
        amount: existingCartItem.amount + action.item.amount // Increase item amount
      };
      updatedItems = [...state.items]; // Copy cart items array
      updatedItems[existingCartItemIndex] = updatedItem; // Update new array with new item
    } else {
      // Concat method is used to create a new array since state should be treated as immutable
      updatedItems = state.items.concat(action.item);
    }

    // Set local storage
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    localStorage.setItem('totalAmount', JSON.stringify(updatedTotalAmount));

    // Update state
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    // Step 1. Find item if it exists
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    // Step 2. Returns an existing cart item or null 
    const existingItem = state.items[existingCartItemIndex];

    // Step 3. Update total price in cart
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    // Step 3. Decrease item amount or remove from cart when none left
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id); // Copy cart items array without removed item
    } else {
      const updatedItem = { // Create new item
        ...existingItem, // Copy cart item
        amount: existingItem.amount - 1 // Decrease item amount
      };
      updatedItems = [...state.items]; // Copy cart items array
      updatedItems[existingCartItemIndex] = updatedItem; // Update new array with new item
    }

    // Set local storage
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    localStorage.setItem('totalAmount', JSON.stringify(updatedTotalAmount));

    // Update state
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultCartState;
};


// Accepts props which display all child elements
const CartProvider = (props) => {
  // useReducer hook used to manage the state of the users cart; the component is re-evaluated whenever it changes
  // Returns two pointers that hold the current state and update the state, accepts the reducer function and the initial state
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  // A method to add a new product to the cart using useReducer
  const addItemToCartHandler = (newItem) => {
    dispatchCartAction({ type: 'ADD', item: newItem });
  };

  // A method to remove a product from the cart using useReducer
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  // Holds current state of user cart
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  // Returns wrapper with all child elements having access to cart data
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;