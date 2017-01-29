import { combineReducers } from 'redux';
import UserReducer from './reducer_user';

const rootReducer = combineReducers({
  users:  UserReducer
});

export default rootReducer;
