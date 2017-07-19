import { combineReducers } from 'redux';
import sessionReducer from './rd_session';
import registerReducer from './rd_register';

const rootReducer = combineReducers({
  session:  sessionReducer,
  register: registerReducer
});

export default rootReducer;
