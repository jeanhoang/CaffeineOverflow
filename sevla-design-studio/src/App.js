import { Switch, Route, Redirect, useContext } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AboutPage from './Pages/AboutPage';
import AuthPage from './Pages/AuthPage';
import HomePage from './Pages/HomePage';
import Shopping from './Pages/Shopping';
import AuthContext from './store/auth-context';

function App() {

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