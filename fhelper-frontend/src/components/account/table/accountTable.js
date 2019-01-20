import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { Table } from 'react-bootstrap';

class AccountTable extends PureComponent {
  static propTypes = {
    accounts: ImmutablePropTypes.list,
    fetchAccounts: PropTypes.func.isRequired,
  };

  getHeader = () => (
    <thead>
      <tr>
        <th>Name</th>
        <th>Balance</th>
      </tr>
    </thead>
  );

  getRow = (name, balance) => (
    <tr>
      <td>{name}</td>
      <td>{balance}</td>
    </tr>
  );

  getAccountRows = () => {
    return this.props.accounts.map(account => (
      <AccountRow
        key={account.id}
        name={account.name}
        balance={account.state.balance}
      />
    ));
  }

  getTotalRow = () => {
    const total = this.props.accounts.reduce((sum, acc) => sum + acc.state.balance, 0);
    return this.getRow('Total', total);
  }

  componentWillMount() {
    this.props.fetchAccounts();
  }

  render() {
    return (
      <Table bordered striped hover size="sm">
        {this.getHeader()}
        <tbody>
          {this.getAccountRows()}
          {this.getTotalRow()}
        </tbody>
      </Table>
    );
  }
}

const AccountRow = ({ name, balance }) => (
  <tr>
    <td>{name}</td>
    <td>{balance}</td>
  </tr>
);

export default AccountTable;