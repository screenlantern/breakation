import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Login from './components/home/Home';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';

export default (
  <Route path="/" componenet={App}>
    <IndexRoute componenet={Home}>
    <Route path="login" componenet={Login}>
    <Route path="registration" componenet={Registration}>
    <Route path='*' component={NotFound} />
  </Route>
);
