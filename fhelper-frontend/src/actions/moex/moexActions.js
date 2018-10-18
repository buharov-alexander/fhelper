import {
  FETCH_REQUEST,
} from 'constants/actionTypes';

export const loadMoexRates = () => (dispatch) => {
  dispatch({ type: FETCH_REQUEST, payload: 'loadMoexRates' });
}