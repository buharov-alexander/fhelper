import { signInRequest } from 'api/userApi';
import {
  FETCH_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from 'constants/actionTypes';

export const signIn = ({ username, password }, history) => (dispatch) => {
  dispatch({ type: FETCH_REQUEST, payload: 'signIn' });

  signInRequest({ username, password })
    .then(response => {
      const origin = window.location.origin;
      const responseUrl = response.url.substring(origin.length);
      if (responseUrl.includes('error')) {
        dispatch({ type: LOGIN_FAILURE });
      } else {
        dispatch({ type: LOGIN_SUCCESS, payload: { username } });
        history.push('../room');
      }
    });
}