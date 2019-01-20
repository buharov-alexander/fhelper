import React from 'react';
import { connect } from 'react-redux';

import { fetchAccounts } from 'actions/accountActions';
import AccountsTable from './accountsTable';

const AccountsTableContainer = props => <AccountsTable {...props} />;

const mapStateToProps = state => ({
    accounts: state.account.accounts,
});

export default connect(
  mapStateToProps,
  { fetchAccounts }
  )(AccountsTableContainer);