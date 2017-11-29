import { combineReducers } from 'redux';
import sessionReducer from './rd_session';
import registerReducer from './rd_register';
import dashboardReducer from './rd_dashboard';

const rootReducer = combineReducers({
  session:  sessionReducer,
  register: registerReducer,
  dashboard: dashboardReducer
});

export default rootReducer;
