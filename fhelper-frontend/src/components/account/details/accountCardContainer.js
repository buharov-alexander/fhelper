import React from 'react';
import { connect } from 'react-redux';

import AccountCard from './accountCard';

const AccountCardContainer = props => <AccountCard {...props} />;

const mapStateToProps = state => ({
  account: state.account.accounts.find(acc => acc.id === state.account.activeAccountId),
  accountStates: state.account.accountStates.get(state.account.activeAccountId),
});

export default connect(
  mapStateToProps,
)(AccountCardContainer);
