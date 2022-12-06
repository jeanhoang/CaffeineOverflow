/*
* A component that creates a number input and 'add to cart' button within the item component.
* It uses React refs for two way binding on the form input field.
*/

import { useRef } from 'react';

import Input from '../../UI/Input';

import classes from './ItemForm.module.css';

// Accepts props which contain a product id
// Forwards props for validated number of products to the item component
const ItemForm = props => {

  // useRef hook used for two way binding on the form input field
  const amountInputRef = useRef();

  // Event handler for the form used to validate user input for number of items to add to cart
  const submitHandler = (event) => {
    event.preventDefault(); // Prevents page reload

    const enteredAmount = amountInputRef.current.value; // Returns a string
    const enteredAmountNumber = +enteredAmount; // Convert string to number

    // Validation check on user input
    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 10) {
      return;
    }

    // Create a pointer to a method outside this component and pass data
    props.onAddToCart(enteredAmountNumber);
  }

  // Returns a number input and add to cart button in a form element
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount" input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '10',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default ItemForm;