import { accountsRequest, accountStatesRequest } from 'api/accountApi';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
  FETCH_ACCOUNTS,
  FETCH_ACCOUNT_STATES,
  SET_ACTIVE_ACCOUNT,
} from 'constants/actionTypes';

export const fetchAccounts = () => (dispatch) => {
  dispatch({ type: FETCH_REQUEST, payload: 'fetchAccounts' });

  accountsRequest()
    .then((accounts) => {
      dispatch({ type: FETCH_ACCOUNTS, payload: accounts });
      dispatch({ type: FETCH_SUCCESS, payload: 'fetchAccounts' });
    })
    .catch(error => dispatch({ type: FETCH_FAILED, payload: `fetchAccounts: ${error}` }));
};

export const fetchAccountStates = accountId => (dispatch) => {
  dispatch({ type: FETCH_REQUEST, payload: 'fetchAccountStates' });

  accountStatesRequest(accountId)
    .then((states) => {
      dispatch({ type: FETCH_ACCOUNT_STATES, payload: { accountId, states } });
      dispatch({ type: FETCH_SUCCESS, payload: 'fetchAccountStates' });
    })
    .catch(error => dispatch({ type: FETCH_FAILED, payload: `fetchAccountStates: ${error}` }));
};

export const setActiveAccount = id => dispatch => dispatch({ type: SET_ACTIVE_ACCOUNT, payload: { id } });
