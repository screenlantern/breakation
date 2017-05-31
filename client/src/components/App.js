import React from 'react';
import logo from '../logo.svg';
import '../../node_modules/uikit/dist/css/uikit.css';
import './App.css';
import Auth from '../containers/auth/Authenticated';

import Home from './home/Home';
import Login from '../containers/auth/Login';
import Registration from '../containers/registration/Registration';
import Dashboard from '../containers/dashboard/Dashboard';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const App = (props) => (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Breakation</h1>
        </header>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Auth(Dashboard)}>
          </Route>
          <Route path="/registration" component={Registration} />
        </div>
        <footer className="App-footer">
        </footer>
      </div>
    </Router>
);

export default App;
