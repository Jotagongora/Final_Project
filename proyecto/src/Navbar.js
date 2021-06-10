import React, { createContext, useState } from 'react';
import {useEffect} from 'react';
import {Route, BrowserRouter as Router, NavLink, Switch} from 'react-router-dom';
import Profile from './Components/Profile';
import Friends from './Components/Friends';
import Games from './Components/Games';
import './Components/Navbar.css';

export const GlobalContext = createContext();

export default function Navbar() {

    const [current, setCurrent] = useState(0);

    const [games, setGames] = useState([]);

    return (
        <nav className="principalNav">
            <Router>
                <GlobalContext.Provider value={{current, setCurrent, setGames, games}}>
                    <NavLink to="/User"><i className="fas fa-user"></i></NavLink>
                    <NavLink to="/Friends"><i className="fas fa-user-friends"></i></NavLink>
                    <NavLink to="/Games"><i className="fas fa-gamepad"></i></NavLink>
                    <Switch>
                        <Route exact path="/User" component={Profile}/>
                        <Route path="/Friends" component={Friends}/>
                        <Route path="/Games" component={Games}/>
                    </Switch>
                </GlobalContext.Provider>
            </Router>
        </nav>
    )
}
