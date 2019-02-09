import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Table } from 'react-bootstrap';

class AccountStatesTable extends PureComponent {
  static propTypes = {
    accountStates: ImmutablePropTypes.list.isRequired,
  };

  static options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  getStateRow = (accountState, index) => (
    <tr key={accountState.id}>
      <td>{index}</td>
      <td>{accountState.date.toLocaleDateString('en-US', AccountStatesTable.options)}</td>
      <td>{accountState.balance}</td>
      <td />
    </tr>
  );

  getStateRows = () => {
    const { accountStates } = this.props;
    return accountStates.map((accountState, index) => this.getStateRow(accountState, index));
  }

  render() {
    return (
      <Table striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Balance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.getStateRows()}
        </tbody>
      </Table>
    );
  }
}

export default AccountStatesTable;
