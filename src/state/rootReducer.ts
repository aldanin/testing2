import { combineReducers } from 'redux';
import session from './Session/reducer';

const rootReducer = combineReducers({
  session,
})

export default rootReducer
