import { combineReducers } from 'redux';

import moexReducer from './moexReducer'
import cbrReducer from './cbrReducer'

export default combineReducers({
  moex: moexReducer,
  cbr: cbrReducer
});