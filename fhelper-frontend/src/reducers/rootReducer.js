import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import moexReducer from './moexReducer'
import cbrReducer from './cbrReducer'

export default combineReducers({
  moex: moexReducer,
  cbr: cbrReducer,
  form: formReducer,
});