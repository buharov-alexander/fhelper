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

  getTotalRow = () => (
    <tr>
      <td>Total</td>
      <td>0</td>
    </tr>
  )

  componentWillMount() {
    this.props.fetchAccounts();
  }

  render() {
    return (
      <Table bordered striped size="sm">
        {this.getHeader()}
        <tbody>
          {this.getTotalRow()}
        </tbody>
      </Table>
    );
  }
}

export default AccountTable;