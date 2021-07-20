import React, { createContext, useState } from 'react';
import {useEffect} from 'react';
import {Route, BrowserRouter as Router, NavLink, Switch} from 'react-router-dom';
import Profile from './pages/Profile';
import Friends from './pages/Friends';
import Games from './pages/Games';
import FriendProfile from './pages/FriendProfile';
import Messages from './pages/Messages';
import './pages/Navbar.css';
import {useAuthContext} from './contexts/AuthContext';

export const GlobalContext = createContext();

export default function Navbar() {

    const [games, setGames] = useState([]);

    const {logOut} = useAuthContext();

    const [current, setCurrent] = useState(0);

    function logout () {
        logOut();
    }
    

    return (
        <nav className="principalNav">
            <Router>
                <GlobalContext.Provider value={{current, setCurrent, setGames, games}}>
                    <NavLink to="/User"><i className="fas fa-user"></i></NavLink>
                    <NavLink to="/Friends"><i className="fas fa-user-friends"></i></NavLink>
                    <NavLink to="/Games"><i className="fas fa-gamepad"></i></NavLink>
                    <NavLink to="/Messages"><i className="fas fa-globe"></i></NavLink>
                    <NavLink onClick={logOut} to="/Messages"><i class="logout fas fa-sign-out-alt"></i></NavLink>
                    <Switch>
                        <Route exact path="/User" component={Profile}/>
                        <Route exact path="/Friends" component={Friends}/>
                        <Route path="/Games" component={Games}/>
                        <Route path="/Messages" component={Messages}/>
                        <Route exact path="/Friends/FriendProfile" component={FriendProfile}/>
                    </Switch>
                </GlobalContext.Provider>
            </Router>
        </nav>
    )
}
