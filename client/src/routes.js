import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/home/Home';
import Login from './containers/login/Login';
import Registration from './containers/registration/Registration';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="login" component={Login} />
    <Route path="registration" component={Registration} />
  </Route>
);

/*
*<Route path='*' component={NotFound} />
*
*/
