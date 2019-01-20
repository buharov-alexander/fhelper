import React from 'react';
import { connect } from 'react-redux';

import { fetchAccounts, setActiveAccount } from 'actions/accountActions';
import AccountsTable from './accountsTable';

const AccountsTableContainer = props => <AccountsTable {...props} />;

const mapStateToProps = state => ({
  accounts: state.account.accounts,
  activeAccountId: state.account.activeAccountId,
});

export default connect(
  mapStateToProps,
  { fetchAccounts, setActiveAccount }
)(AccountsTableContainer);