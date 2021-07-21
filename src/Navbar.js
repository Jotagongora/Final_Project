import React, { createContext, useState } from 'react';
import {Route, BrowserRouter as Router, NavLink, Switch} from 'react-router-dom';
import Profile from './pages/Profile';
import Friends from './pages/Friends';
import Games from './pages/Games';
import FriendProfile from './pages/FriendProfile';
import People from './pages/People';
import './pages/Navbar.css';
import GamePosts from './pages/GamePosts';
import {useAuthContext} from './contexts/AuthContext';

export const GlobalContext = createContext();

export default function Navbar() {

    const [games, setGames] = useState([]);

    const {logOut} = useAuthContext();

    const [current, setCurrent] = useState(0);


    

    return (
        <nav className="principalNav">
            <Router>
                <GlobalContext.Provider value={{current, setCurrent, setGames, games}}>
                    <NavLink to="/User"><i className="fas fa-user"></i></NavLink>
                    <NavLink to="/Friends"><i className="fas fa-user-friends"></i></NavLink>
                    <NavLink to="/Games"><i className="fas fa-gamepad"></i></NavLink>
                    <NavLink to="/People"><i className="fas fa-globe"></i></NavLink>
                    <NavLink onClick={logOut} to="/Messages"><i className="logout fas fa-sign-out-alt"></i></NavLink>
                    <Switch>
                        <Route exact path="/User" component={Profile}/>
                        <Route exact path="/Friends" component={Friends}/>
                        <Route exact path="/Games" component={Games}/>
                        <Route path="/People" component={People}/>
                        <Route exact path="/Friends/FriendProfile" component={FriendProfile}/>
                        <Route exact path="/Games/Posts" component={GamePosts}/>
                    </Switch>
                </GlobalContext.Provider>
            </Router>
        </nav>
    )
}
