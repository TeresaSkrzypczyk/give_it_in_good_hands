import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
//import logo from './logo.sv
import Home from './components/Home';
import './scss/main.scss';

function App () {
    return (
        <HashRouter>
          <>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </>
        </HashRouter>
    );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
