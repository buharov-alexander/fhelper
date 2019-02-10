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
    if (response.url && response.url.includes('error')) {
      dispatch({ type: LOGIN_FAILURE });
    } else {
      dispatch({ type: LOGIN_SUCCESS, payload: { username } });
      history.push('../home');
    }
  });
};
