/*
* A component that creates the header.
*/

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';
import logoImage from '../../assets/logo.png';


// Forwards props for closing the cart modal from inside the App component
const Header = props => {

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  }

  // Returns a header with logo, title, cart button, and background image
  return <header className={classes.header}>
    <Link to='/'>
      <div className={classes['logo-image']}>
        <img src={logoImage} alt='Logo' />
      </div>
    </Link>
    <h1>Sevla Design Studio</h1>
    <nav>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/shopping'>Shopping</Link>
        </li>
        {!isLoggedIn && (
          <li>
            <Link to='/auth'>Login</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button className={classes.logout} onClick={logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    <HeaderCartButton onClick={props.onShowCart} />
  </header>
};

export default Header;