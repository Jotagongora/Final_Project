import React, { createContext, useState } from 'react';
import {useEffect} from 'react';
import {Route, BrowserRouter as Router, NavLink, Switch} from 'react-router-dom';
import Profile from './Components/Profile';
import Friends from './Components/Friends';
import Games from './Components/Games';
import './Components/Navbar.css';

export const GlobalContext = createContext();

export default function Navbar() {

    const url_games = `https://api.rawg.io/api/games?key=b24718c4e7d741ba95a738653024114d`;

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch(url_games)
        .then(response => response.json())
        .then(data => setGames(data.results))
        }, []);

    const [current, setCurrent] = useState(0);

    

    return (
        <nav className="principalNav">
            <Router>
                <GlobalContext.Provider value={{current, setCurrent, setGames, games}}>
                    <NavLink to="/User"><i className="fas fa-user"></i></NavLink>
                    <NavLink to="/Friends"><i className="fas fa-user-friends"></i></NavLink>
                    <NavLink to="/Games"><i className="fas fa-gamepad"></i></NavLink>
                    <NavLink to="/Message"><i className="fas fa-envelope"></i></NavLink>
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
