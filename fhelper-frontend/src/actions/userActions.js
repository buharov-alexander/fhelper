import { signInRequest } from 'api/userApi';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from 'constants/actionTypes';
import { request } from './actionUtils';

export const signIn = ({ username, password }, history) => (dispatch) => {
  request({
    operation: signInRequest,
    params: { username, password },
    dispatch,
    type: 'signIn',
  }).then((response) => {
    const { origin } = window.location;
    const responseUrl = response.url.substring(origin.length);
    if (responseUrl.includes('error')) {
      dispatch({ type: LOGIN_FAILURE });
    } else {
      dispatch({ type: LOGIN_SUCCESS, payload: { username } });
      history.push('../home');
    }
  });
};
