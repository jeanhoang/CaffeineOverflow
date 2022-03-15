/*
* A component that creates the header.
*/

import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';
import backgroundImage from '../../assets/background.png';
import logoImage from '../../assets/logo.png';


// Forwards props for closing the cart modal from inside the App component
const Header = props => {

  // Returns a header with logo, title, cart button, and background image
  return <Fragment>
    <header className={classes.header}>
      <div className={classes['logo-image']}>
        <img src={logoImage} alt='Logo' />
      </div>
      <h1>Sevla Design Studio</h1>
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
      <img src={backgroundImage} alt='Background' />
    </div>
  </Fragment>
};

export default Header;