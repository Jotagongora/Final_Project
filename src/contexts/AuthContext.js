import React from 'react';
import {createContext, useContext, useState} from 'react';

const AuthContext = createContext({})

export default function AuthContextProvider({children}) {

    const [LoggedInUser, setLoggedInUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const getToken = () => localStorage.getItem("TOKEN_KEY");
    const setToken = token => localStorage.setItem("TOKEN_KEY", token);
    const removeToken = () => localStorage.removeItem("TOKEN_KEY");

    const isAdmin = () => LoggedInUser.role === "ADMIN";

    const logIn = (token, user) => {
        setToken(token);
        setLoggedInUser(user);
        setIsAuthenticated(true);
    }

    const logOut = () => {
        removeToken();
        setLoggedInUser({});
        setIsAuthenticated(false);
    }

    const contextValue = {
        logIn,
        logOut,
        isAuthenticated
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>

    )
}


// Custom hook para simplificar el uso de este contexto

const useAuthContext = () => useContext(AuthContext);

export {
    useAuthContext
}
