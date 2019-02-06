import { accountsRequest, accountStatesRequest } from 'api/accountApi';
import {
  FETCH_ACCOUNTS,
  FETCH_ACCOUNT_STATES,
  SET_ACTIVE_ACCOUNT,
} from 'constants/actionTypes';
import { request } from './actionUtils';

export const fetchAccounts = () => (dispatch) => {
  request({
    operation: accountsRequest,
    dispatch,
    type: 'fetchAccounts',
  }).then(accounts => dispatch({ type: FETCH_ACCOUNTS, payload: accounts }));
};

export const fetchAccountStates = accountId => (dispatch) => {
  request({
    operation: accountStatesRequest,
    params: accountId,
    dispatch,
    type: 'fetchAccountStates',
  }).then(({ states }) => dispatch({ type: FETCH_ACCOUNT_STATES, payload: { accountId, states } }));
};

export const setActiveAccount = id => dispatch => dispatch({ type: SET_ACTIVE_ACCOUNT, payload: { id } });
