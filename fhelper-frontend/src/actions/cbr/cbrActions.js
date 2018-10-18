import {
  FETCH_REQUEST,
} from 'constants/actionTypes';

export const loadCbrRates = () =>  (dispatch) => {
  dispatch({ type: FETCH_REQUEST, payload: 'loadCbrRates' });
}