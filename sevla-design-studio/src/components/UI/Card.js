/*
* A component that creates a styled card element.
*/

import classes from './Card.module.css';

// Accepts props which display all child elements
const Card = props => {

  // Returns a stylized div and its content 
  return <div className={classes.card}>{props.children}</div>
};

export default Card;