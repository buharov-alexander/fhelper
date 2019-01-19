import React from 'react';
import { connect } from 'react-redux';

import { fetchAccounts } from 'actions/accountActions';
import AccountTable from './accountTable';

const AccountTableContainer = props => <AccountTable {...props} />

const mapStateToProps = state => ({
    accounts: state.account.accounts,
});

export default connect(
  mapStateToProps,
  { fetchAccounts }
  )(AccountTableContainer);