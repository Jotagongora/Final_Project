import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import CreateAccount from '../pages/CreateAccount';
import Navbar from '../Navbar';

export default function Pages() {
    return (
        <div>
        <Switch>
          <Route path="/Login" component={Login}/>
          <Route path="/CreateAccount" component={CreateAccount}/>
          <PrivateRoute path="/User">
              <Navbar/>
          </PrivateRoute>
        </Switch>
        </div>
    )
}
