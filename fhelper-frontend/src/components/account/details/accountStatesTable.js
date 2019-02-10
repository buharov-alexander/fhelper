import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Table, Image } from 'react-bootstrap';

import { edit, remove } from 'constants/images';

class AccountStatesTable extends PureComponent {
  static propTypes = {
    accountStates: ImmutablePropTypes.list.isRequired,
  };

  static options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  getActions = () => (
    <div>
      <Image className="account-state-icon" src={edit} />
      <Image className="account-state-icon" src={remove} />
    </div>
  );

  getStateRow = (accountState, index) => (
    <tr key={accountState.id}>
      <td>{index}</td>
      <td>{accountState.date.toLocaleDateString('en-US', AccountStatesTable.options)}</td>
      <td>{accountState.balance}</td>
      <td>{this.getActions()}</td>
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
