/*
* A component that manages the login data of the current user.
*/

import React, { useState } from 'react';
const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
});

export const AuthContextProvider = (props) => {

    const initialToken = localStorage.getItem('token');

    //If token exists: user is Login
    // Else: Not login
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token; //If token is a string that's not empty => return true

    const loginHandler = (token) => {
        setToken(token);

        //Store user's login token in local storage 
        localStorage.setItem('token', token);
    }

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    }

    //Construct context
    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return (<AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>);
}

export default AuthContext;