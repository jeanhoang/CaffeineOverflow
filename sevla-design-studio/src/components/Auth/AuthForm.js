import { useState, useRef, useContext } from 'react';
import axios from 'axios';

import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const onChangeUsername = (event) => {
     setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const user = {
      username:  username,
      password: password
    }

    setIsLoading(true);

    if (isLogin) {
      setIsLoading(false);
      const token = 'abcdef-u';
      axios.post('http://localhost:5000/users/login', user)
        .then(res =>  console.log(res.data))
          .then((data) => {
            authCtx.login(token);
          });
      //Redirect back to home page after successfully logged in
      history.replace('/');
      

    } else {
      setIsLoading(false);
      axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data));
    }
    
    //Clear input fields
    setUsername('');
    setPassword('');

  };

  

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='username'>Username</label>
          <input type='username' id='username' required onChange={onChangeUsername}
          value={username}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            value={password}
            onChange={onChangePassword}
          />
        </div>
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