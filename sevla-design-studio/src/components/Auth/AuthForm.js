/*
* A component that creates the login and register page.
*/

import { useState, useContext } from 'react';
import axios from 'axios';

import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {

  const authCtx = useContext(AuthContext); // Hook to set or get user account info
  const history = useHistory(); // Hook to redirect the user to another page

  // Manage page content
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Form input fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Form status messages
  const [statusMsg, setStatusMsg] = useState('');
  const newAccountMsg = "Account successfully created, please log in.";
  const invalidLoginUsername = "Invalid username, please try again.";
  const invalidLoginPassword = "Invalid password, please try again.";
  const errorMsg = "There was an unexpected error. Please try again.";
  const invalidPasswordMatch = "Passwords do not match.";

  // REST API URLs
  const LoginAPI = 'https://copytester-344.herokuapp.com/users/login';
  const RegisterAPI = 'https://copytester-344.herokuapp.com/users/add';

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

  // A method that sends a POST request to the server for login
  const sendLoginRequest = (user) => {
    axios.post(LoginAPI, user)
      .then(function (response) {
        console.log(response);
        // Check if credentials return a successful response
        if (response.data === "Credentials matched") {
          // In the future, the server will send a token (unique string) for authentication. 
          // Currently this feature is not supported yet so the username is used as a placeholder.
          authCtx.login(user.username);
          history.replace('/profile'); // Redirect back to profile page after successful login
        }
        else if (response.data === "Wrong password") {
          setStatusMsg(invalidLoginPassword);
        }
        else {
          setStatusMsg(invalidLoginPassword);
        }
      })
      .catch(function (error) {
        console.log(error);
        setStatusMsg(invalidLoginUsername);
      });
  };

  // A method that sends a POST request to the server for registering a user
  const sendRegisterRequest = (user) => {
    axios.post(RegisterAPI, user)
      .then(function (response) {
        console.log(response);
        // Check if successful response returned
        if (response.data === "User added!") {
          setStatusMsg(newAccountMsg);
          setIsLogin(true);
        }
        else {
          setStatusMsg(errorMsg);
        }
      })
      .catch(function (error) {
        console.log(error);
        setStatusMsg(errorMsg);
      });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Prevent page refresh
    setStatusMsg('') // Clear status

    // Validate both password fields are the same 
    if (!isLogin && password !== confirmPassword) {
      setStatusMsg(invalidPasswordMatch);
      return;
    }

    // Display loading text
    setIsLoading(true);

    // Create user object to pass to server
    const user = {
      username: username,
      password: password
    }

    // Check state of page to see if user is logging in or signing up
    if (isLogin) {
      // Send POST request to the server for login
      sendLoginRequest(user);

      // Hide loading text
      setIsLoading(false);
    } else {
      // Send POST request to the server for signup
      sendRegisterRequest(user);

      // Hide loading text
      setIsLoading(false);
    }
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
        {isLogin && <p className={classes.status}>{statusMsg}</p>}

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
        {!isLogin && <p className={classes.error}>{statusMsg}</p>}

        <div className={classes.actions}>
          {!isLoading && (
            <button disabled={isLoading.value}>{isLogin ? 'Login' : 'Create Account'}</button>
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