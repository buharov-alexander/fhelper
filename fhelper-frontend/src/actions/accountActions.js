import { accountsRequest } from 'api/accountApi';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
  LOAD_ACCOUNTS,
  SET_ACTIVE_ACCOUNT,
} from 'constants/actionTypes';

export const fetchAccounts = () => (dispatch) => {
  dispatch({ type: FETCH_REQUEST, payload: 'loadAccounts' });

  accountsRequest()
    .then((accounts) => {
      dispatch({ type: LOAD_ACCOUNTS, payload: accounts });
      dispatch({ type: FETCH_SUCCESS, payload: 'loadAccounts' });
    })
    .catch(error => dispatch({ type: FETCH_FAILED, payload: `loadAccounts: ${error}` }));
};

export const setActiveAccount = id => dispatch => dispatch({ type: SET_ACTIVE_ACCOUNT, payload: { id } });
