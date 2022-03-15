/*
* A component that creates a styled input element.
* It uses React refs for two way binding on the form input field.
*/

import React from 'react';

import classes from './Input.module.css';

// Accepts props which contain label name and an object used to set input attributes
// Accepts ref, this implimentation is for custom components
const Input = React.forwardRef((props, ref) => {

  // Returns stylized label and input elements
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;