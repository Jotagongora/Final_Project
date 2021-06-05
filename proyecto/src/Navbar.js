import React from 'react';
import {Route, BrowserRouter as Router, NavLink, Switch} from 'react-router-dom';
import Profile2 from './Components/Profile2';
import './Components/Navbar.css';

export default function Navbar() {
    return (
        <nav className="principalNav">
            <Router>
                <NavLink to="/Profile"><i class="fas fa-user-circle"></i></NavLink>
                <Switch>
                    <Route path="/Profile" component={Profile2}/>
                </Switch>
            </Router>
        </nav>
    )
}
