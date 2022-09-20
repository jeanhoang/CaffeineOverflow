/*
* The main app component which is loaded by the index page. 
* It directs the user to the requested component/page based on the url.
* It also uses the Context hook to access the current user data (if any).
*/

import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AboutPage from './Pages/AboutPage';
import AuthPage from './Pages/AuthPage';
import DetailProductPage from './Pages/DetailProductPage';
import HomePage from './Pages/HomePage';
import Shopping from './Pages/Shopping';
import AuthContext from './store/auth-context';


function App() {

  // Returns requested component/page based on the url
  // AuthContext provides user login data (if any)
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <Layout>
            <Switch>
              <Route path='/' exact>
                <HomePage />
              </Route>
              <Route path='/about' exact>
                <AboutPage />
              </Route>
              <Route path='/shopping' exact>
                <Shopping />
              </Route>
              <Route path='/auth'>
                <AuthPage />
              </Route>
              <Route path='/products/:ProductName' exact>
                  <DetailProductPage />
              </Route>
              {ctx.isLoggedIn && (
                <Route path='/profile'>
                  <UserProfile />
                </Route>
              )}
              <Route path='*'>
                <Redirect to='/' />
              </Route>
              
            </Switch>
          </Layout>
        )
      }}
    </AuthContext.Consumer>
  );
}

export default App;
