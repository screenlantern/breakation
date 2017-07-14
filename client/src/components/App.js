import React from 'react';
import '../../node_modules/wingcss/dist/wing.css';
import './App.css';
import Auth from '../containers/auth/Authenticated';

import Home from '../containers/home/Home';
import Login from '../containers/auth/Login';
import Registration from '../containers/registration/Registration';
import Dashboard from '../containers/dashboard/Dashboard';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const App = (props) => (
    <Router>
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Auth(Dashboard)} />
          <Route path="/registration" component={Registration} />
        <footer className="App-footer">
        </footer>
      </div>
    </Router>
);

export default App;
