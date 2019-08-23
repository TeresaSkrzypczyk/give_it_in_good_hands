import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
//import logo from './logo.sv
import Home from './components/Home';
import Logowanie from './components/Logowanie';
import Rejestracja from './components/Logowanie';
import './scss/main.scss';

function App () {
    return (
        <Router>
          <>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/logowanie' component={Logowanie} />
              <Route path='/rejestracja' component={Rejestracja} />
            </Switch>
          </>
        </Router>
    );
}

export default App;
