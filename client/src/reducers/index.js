import { combineReducers } from 'redux';
import sessionReducer from './rd_session';
import registerReducer from './rd_register';
import dashboardReducer from './rd_dashboard';
import memberReducer from './rd_member';

const rootReducer = combineReducers({
  session:  sessionReducer,
  register: registerReducer,
  dashboard: dashboardReducer,
  member: memberReducer
});

export default rootReducer;
