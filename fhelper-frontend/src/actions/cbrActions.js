import { List } from 'immutable';

import { dailyRatesRequest } from 'api/cbrApi';
import {
  LOAD_CURRENT_CBR_RATES,
} from 'constants/actionTypes';
import {
  USD,
  EUR,
} from 'constants/valutaCodes';
import { request } from './actionUtils';

export const loadCurrentCbrRates = () => (dispatch) => {
  const valutaCodes = List.of(USD, EUR);

  request({
    operation: dailyRatesRequest,
    params: valutaCodes,
    dispatch,
    type: 'loadCurrentCbrRates',
  }).then(rates => dispatch({ type: LOAD_CURRENT_CBR_RATES, payload: rates }));
};
