import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
//import logo from './logo.sv
import Home from './components/Home';
import Log from './components/Logowanie';
import LogOut from './components/LogOut';
import Sign from './components/Rejestracja';
import './scss/main.scss';

function App () {
    return (
        <Router>
          <>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/logowanie' component={Log} />
              <Route path='/rejestracja' component={Sign} />
              <Route path='/wylogowano' component={LogOut} />
            </Switch>
          </>
        </Router>
    );
}

export default App;
