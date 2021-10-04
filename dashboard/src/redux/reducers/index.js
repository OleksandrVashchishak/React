import { combineReducers } from 'redux';

import realty from './realty';
import loginPopup from './loginPopup';
import users from './users';
import dialogs from './dialogs'
import plans from './plans'

const rootReducer = combineReducers({
  realty,
  loginPopup,
  users,
  dialogs,
  plans,
});

export default rootReducer;



