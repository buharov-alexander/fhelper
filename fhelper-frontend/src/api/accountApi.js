import { Record, List } from 'immutable';

const AccountStateRecord = Record({
  id: undefined,
  balance: undefined,
  date: undefined,
});

const createAccountStateRecord = state => AccountStateRecord({
  ...state,
  date: new Date(state.date),
});

const AccountRecord = Record({
  id: undefined,
  name: undefined,
  valuta: undefined,
  type: undefined,
  state: createAccountStateRecord({}),
});

const createAccountRecord = account => AccountRecord({
  ...account,
  state: AccountStateRecord(account.state),
});

export const accountsRequest = () => fetch('/fhelper/account')
  .then(response => response.json())
  .then(response => ({ accounts: List(response.map(account => createAccountRecord(account))) }));

export const accountStatesRequest = id => fetch(`/fhelper/account/${id}/states`)
  .then(response => response.json())
  .then(response => ({ states: List(response.map(state => createAccountStateRecord(state))) }));
