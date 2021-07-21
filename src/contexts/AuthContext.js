import React from 'react';
import {createContext, useContext, useState} from 'react';

const AuthContext = createContext({})

export default function AuthContextProvider({children}) {

    const [friendUser, setFriendUser] = useState();

    const [gameId, setGameId] = useState();

    const [post, setPost] = useState([]);

    const [user, setUser] = useState([]);

    const [photos, setPhotos] = useState([]);

    const [chargeFetch, setChargeFetch] = useState(false);

    const [LoggedInUser, setLoggedInUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const setToken = token => localStorage.setItem("TOKEN_KEY", token);
    const removeToken = () => localStorage.removeItem("TOKEN_KEY");



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
        post,
        user,
        setUser,
        photos,
        setPhotos,
        chargeFetch,
        setChargeFetch,
        gameId,
        setGameId

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
