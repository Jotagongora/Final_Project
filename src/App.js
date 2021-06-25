import './App.css';
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom';
import CreateAccount from './Components/CreateAccount';
import './css/all.css';
import Navbar from './Navbar';
import Login from './Components/Login';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/CreateAccount" component={CreateAccount}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

