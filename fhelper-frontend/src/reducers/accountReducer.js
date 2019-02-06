import { Record, List, Map } from 'immutable';

import {
  FETCH_ACCOUNTS,
  FETCH_ACCOUNT_STATES,
  SET_ACTIVE_ACCOUNT,
} from 'constants/actionTypes';

const AccountState = Record({
  accounts: List(),
  activeAccountId: undefined,
  accountStates: Map(),
});

export default function cbrReducer(state = AccountState({}), action) {
  switch (action.type) {
    case FETCH_ACCOUNTS: {
      return state.merge({
        accounts: action.payload.accounts,
      });
    }
    case FETCH_ACCOUNT_STATES: {
      const { accountId, states } = action.payload;
      return state.merge({
        accountStates: state.accountStates.set(accountId, states),
      });
    }
    case SET_ACTIVE_ACCOUNT: {
      return state.merge({
        activeAccountId: action.payload.id,
      });
    }
    default:
      return state;
  }
}
