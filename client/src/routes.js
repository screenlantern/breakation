import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/home/Home';
import Login from './containers/login/Login';
import Registration from './containers/registration/Registration';

export default (
  <Route path="/" componenet={App}>
    <IndexRoute componenet={Home} />
    <Route path="login" componenet={Login} />
    <Route path="registration" componenet={Registration} />
  </Route>
);

/*
*<Route path='*' component={NotFound} />
*
*/
