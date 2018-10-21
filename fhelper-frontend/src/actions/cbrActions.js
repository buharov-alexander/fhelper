import { List } from 'immutable';

import { dailyRatesRequest } from 'api/cbrApi';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
  LOAD_CURRENT_CBR_RATES,
} from 'constants/actionTypes';
import {
  USD,
  EUR,
} from 'constants/valutaCodes';

export const loadCurrentCbrRates = () =>  (dispatch) => {
  dispatch({ type: FETCH_REQUEST, payload: 'loadCurrentCbrRates' });
  const valutaCodes = List.of(USD, EUR);

  dailyRatesRequest(valutaCodes)
  .then(response => response.json())
  .then((responseJson) => {
    dispatch({ type: LOAD_CURRENT_CBR_RATES, payload: responseJson });
    dispatch({ type: FETCH_SUCCESS, payload: 'loadCurrentCbrRates' });
  })
  .catch(error => dispatch({ type: FETCH_FAILED, payload: `loadCurrentCbrRates: ${error}` }));
}