import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import moexReducer from './moexReducer';
import cbrReducer from './cbrReducer';
import userReducer from './userReducer';
import accountReducer from './accountReducer';

export default combineReducers({
  moex: moexReducer,
  cbr: cbrReducer,
  user: userReducer,
  account: accountReducer,
  form: formReducer,
});
