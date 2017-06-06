import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App/>
  </Provider>
  ,document.getElementById('root')
);



/* 
* old version 3.0.0 set up
*import {Router, browserHistory} from 'react-router';
* import routes from './routes';
* <Router history={browserHistory} routes={routes} />
*/