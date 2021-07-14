import React from 'react';
import {createContext, useContext, useState, useEffect} from 'react';

const AuthContext = createContext({})

export default function AuthContextProvider({children}) {

    const [friendUser, setFriendUser] = useState();

    const [post, setPost] = useState([]);

    const [LoggedInUser, setLoggedInUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    const getToken = () => localStorage.getItem("TOKEN_KEY");
    const setToken = token => localStorage.setItem("TOKEN_KEY", token);
    const removeToken = () => localStorage.removeItem("TOKEN_KEY");

    const isAdmin = () => LoggedInUser.role === "ADMIN";

    const logIn = (token, id) => {
        setToken(token);
        setLoggedInUser(id);
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
        isAuthenticated,
        LoggedInUser,
        friendUser,
        setFriendUser,
        setPost,
        post
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
