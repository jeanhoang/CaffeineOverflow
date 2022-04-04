import { useState, useRef, useContext } from 'react';
import axios from 'axios';

import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {

  const authCtx = useContext(AuthContext); // Hook to set or get user account info
  const history = useHistory(); // Hook to redirect the user to another page

  // Hooks to manage state
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  // Form input fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // Password validation
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  // Form status
  const [statusMsg, setStatusMsg] = useState('');
  const newAccountMsg = "Account successfully created, please log in."
  const errorLoggingIn = "Invalid username or password, please try again"

  // A method to switch page content between sign up or login
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Prevent page refresh
    setStatusMsg('') // Clear status

    // Validate input is not empty
    if (!isLogin && password !== confirmPassword) {
      setPasswordIsValid(false);
      return;
    }
    setPasswordIsValid(true);

    setIsLoading(true); // Display loading text

    // Create user object to pass to server
    const user = {
      username: username,
      password: password
    }

    // Check state of page to see if user is logging in or signing up
    if (isLogin) {
      setIsLoading(false); // Hide loading text

      // Send POST request to the server for login
      axios.post('http://localhost:5000/users/login', user)
        .then(res => console.log(res.data))
        .then((data) => {
          // In the future, the server will send a token (unique string) for authentication. 
          // Currently this feature is not supported yet so a hardcoded value is used as a placeholder.
          authCtx.login('CAFFINE_OVERFLOW');
        });

      history.replace('/'); // Redirect back to home page after successful login
    } else {
      setIsLoading(false); // Hide loading text

      // Send POST request to the server for signup
      axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));

      setStatusMsg(newAccountMsg)
      setIsLogin(true);
    }

    //Clear input fields
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>

      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='username'>Username</label>
          <input
            type='username'
            id='username'
            minLength="3"
            required
            value={username}
            onChange={onChangeUsername} />
        </div>

        <div className={classes.control}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            minLength="8"
            required
            value={password}
            onChange={onChangePassword}
          />
        </div>
        {<p className={classes.status}>{statusMsg}</p>}

        {!isLogin && <div className={classes.control}>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            id='confirmPassword'
            minLength="8"
            required
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
          />
        </div>}
        {!passwordIsValid && <p className={classes.error}>Passwords do not match</p>}

        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
          )}

          {isLoading && <p>Sending request...</p>}

          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;