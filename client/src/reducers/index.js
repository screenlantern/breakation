import { combineReducers } from 'redux';
import sessionReducer from './rd_session';

const rootReducer = combineReducers({
  login:  sessionReducer
});

export default rootReducer;
