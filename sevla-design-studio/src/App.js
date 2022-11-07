/*
* The main app component which is loaded by the index page. 
* It directs the user to the requested component/page based on the url.
* It also uses the Context hook to access the current user data (if any).
*/

import { Route, Navigate, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AboutPage from './Pages/AboutPage';
import AuthPage from './Pages/AuthPage';
import DetailProductPage from './Pages/DetailProductPage';
import HomePage from './Pages/HomePage';
import PaymentSuccess from './Pages/PaymentSuccess';
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
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/shopping' element={<Shopping />} />
              <Route path='/auth' element={<AuthPage />} />
              <Route path='/products/:ProductName' element={<DetailProductPage />} />
              <Route path='/success' element={<PaymentSuccess />} />
              {ctx.isLoggedIn && (
                <Route path='/profile' element={<UserProfile />} />
              )}
              <Route path='*' element={<Navigate replace to="/" />} />
            </Routes>
          </Layout>
        )
      }}
    </AuthContext.Consumer >
  );
}

export default App;
