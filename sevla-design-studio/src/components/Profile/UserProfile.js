import { Link } from 'react-router-dom';
import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';
import AuthContext from '../../store/auth-context';
import { useContext } from 'react';

const UserProfile = () => {
  const authCtx = useContext(AuthContext); // Hook to set or get user account info
  const username = authCtx.token;
  const adminLink = <Link to='/admin/products'>Admin Dashboard</Link>
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
      {username === 'sysadmin' && (adminLink)}
    </section>
  );
};

export default UserProfile;
