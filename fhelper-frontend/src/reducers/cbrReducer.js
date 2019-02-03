import { Map } from 'immutable';

import {
  LOAD_CURRENT_CBR_RATES,
} from 'constants/actionTypes';

const initialState = {
  currentRates: Map(),
};

const saveCurrentRates = (state, rates) => {
  const ratesMap = rates.reduce(
    (map, rate) => map.set(rate.charCode, rate),
    Map(),
  );
  return Object.assign({}, state, { currentRates: ratesMap });
};

export default function cbrReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CURRENT_CBR_RATES: {
      return saveCurrentRates(state, action.payload.rates);
    }
    default:
      return state;
  }
}
