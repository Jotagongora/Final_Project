import React from 'react';
import {Route, BrowserRouter as Router, NavLink, Switch} from 'react-router-dom';
import Profile2 from './Components/Profile2';
import Friends from './Components/Friends';
import './Components/Navbar.css';

export default function Navbar() {
    return (
        <nav className="principalNav">
            <Router>
                <NavLink to="/Profile"><i class="fas fa-user"></i></NavLink>
                <NavLink to="/Friends"><i class="fas fa-user-friends"></i></NavLink>
                <Switch>
                    <Route path="/Profile" component={Profile2}/>
                    <Route path="/Friends" component={Friends}/>
                </Switch>
            </Router>
        </nav>
    )
}
