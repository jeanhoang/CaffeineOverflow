/*
* A component that creates a modal with the help of two other components.
* It uses React portals to render elements outside of its component hierarchy, 
* in this case above all the other content in the body of the page.
*/

import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

// Accepts props method pointer for closing the cart modal from inside the App component
const Backdrop = (props) => {
  // Returns a div that shades the page and closes if clicked
  return <div onClick={props.onClose} className={classes.backdrop} />;
};

// Accepts props which display all child elements
const ModalOverlay = (props) => {
  // Returns a div that displays content as pop-up modal
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// Forwards props method pointer for closing the cart modal from inside the App component
// Forwards props which display all child elements
const Modal = (props) => {
  // Returns a modal containing a portal to the Backdrop and ModalOverlay components
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('overlays'))}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
    </Fragment>
  );
};

export default Modal;