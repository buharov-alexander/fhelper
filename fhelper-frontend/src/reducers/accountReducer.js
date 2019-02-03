import { Record, List } from 'immutable';

import {
  LOAD_ACCOUNTS,
  SET_ACTIVE_ACCOUNT,
} from 'constants/actionTypes';

const AccountState = Record({
  accounts: List(),
  activeAccountId: undefined,
});

export default function cbrReducer(state = AccountState({}), action) {
  switch (action.type) {
    case LOAD_ACCOUNTS: {
      return state.merge({
        accounts: action.payload.accounts,
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
