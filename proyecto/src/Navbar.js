import React from 'react';
import {useEffect} from 'react';
import {Route, BrowserRouter as Router, NavLink, Switch} from 'react-router-dom';
import Profile2 from './Components/Profile2';
import Friends from './Components/Friends';
import Games from './Components/Games';
import './Components/Navbar.css';

export default function Navbar() {

    return (
        <nav className="principalNav">
            <Router>
                <NavLink to="/Profile"><i className="fas fa-user"></i></NavLink>
                <NavLink to="/Friends"><i className="fas fa-user-friends"></i></NavLink>
                <NavLink to="/Games"><i className="fas fa-gamepad"></i></NavLink>
                <Switch>
                    <Route path="/Profile" component={Profile2}/>
                    <Route path="/Friends" component={Friends}/>
                    <Route path="/Friends" component={Games}/>
                </Switch>
            </Router>
        </nav>
    )
}
