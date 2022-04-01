import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AboutPage from './Pages/AboutPage';
import AuthPage from './Pages/AuthPage';
import HomePage from './Pages/HomePage';
import Shopping from './Pages/Shopping';

function App() {
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
        <Route path='/profile'>
          <UserProfile />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;