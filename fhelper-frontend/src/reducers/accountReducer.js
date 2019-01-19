import { Record, List } from 'immutable';

import {
  LOAD_ACCOUNTS,
} from 'constants/actionTypes';

const AccountState = Record({
  accounts: List()
});

export default function cbrReducer(state = AccountState({}), action) {
  switch (action.type) {
    case LOAD_ACCOUNTS: {
      return state.merge({
        accounts: action.payload.accounts
      });
    }
    default:
      return state;
  }
}