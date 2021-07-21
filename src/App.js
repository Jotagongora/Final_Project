import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import './css/all.css';
import Pages from './pages/Pages';
import AuthContextProvider from './contexts/AuthContext';




function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Pages/>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;

