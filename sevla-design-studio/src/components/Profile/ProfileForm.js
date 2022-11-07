import classes from './ProfileForm.module.css';
import { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';


const ProfileForm = () => {

  const newPasswordInputRef = useRef(); // Retrieve user input
  const authCtx = useContext(AuthContext); // Retrieve current user logged in
  const username = authCtx.token;

  const adminLink =
    <div className={classes.action}>
      <Link to='/admin/products' className={classes.action}>Admin Dashboard</Link>
    </div>

  // //To impliment Post request for updating user password
  // const submitHandler = event => {
  //   event.preventDefault();
  //   const enteredNewPassword = newPasswordInputRef.current.value;
  // };

  return (
    <div>
      <form className={classes.form}>
        <h1>Welcome, {username}</h1>
        {username === 'sysadmin' && (adminLink)}
        <div className={classes.control}>
          <label htmlFor='new-password'>New Password</label>
          <input type='password' id='new-password' minLength="8" ref={newPasswordInputRef} />
        </div>
        <div className={classes.action}>
          <button>Change Password</button>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;