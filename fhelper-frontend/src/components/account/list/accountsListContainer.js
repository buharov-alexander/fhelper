import React from 'react';
import { connect } from 'react-redux';

import { fetchAccounts, setActiveAccount, fetchAccountStates } from 'actions/accountActions';
import AccountsList from './accountsList';

const AccountsListContainer = props => <AccountsList {...props} />;

const mapStateToProps = state => ({
  accounts: state.account.accounts,
  activeAccountId: state.account.activeAccountId,
});

export default connect(
  mapStateToProps,
  { fetchAccounts, setActiveAccount, fetchAccountStates },
)(AccountsListContainer);
