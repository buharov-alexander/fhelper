import { Record, List } from 'immutable';

export const accountsRequest = () => {
  return fetch('/fhelper/account')
    .then(response => response.json())
    .then(response => {
      return { accounts: List(response.map(account => createAccountRecord(account))) }
    });
};

const createAccountRecord = (account) => {
  return AccountRecord({
    ...account,
    state: AccountStateRecord(account.state)
  });
}

const AccountStateRecord = Record({
  id: undefined,
  balance: undefined,
  date: undefined
});

const AccountRecord = Record({
  id: undefined,
  name: undefined,
  valuta: undefined,
  type: undefined,
  state: AccountStateRecord({})
});