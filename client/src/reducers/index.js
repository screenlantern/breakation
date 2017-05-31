import { combineReducers } from 'redux';
import sessionReducer from './rd_session';

const rootReducer = combineReducers({
  session:  sessionReducer
});

export default rootReducer;
