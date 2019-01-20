import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import 'style/accountsTable.css';
import { Table } from 'react-bootstrap';

class AccountsTable extends PureComponent {
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

  getRow = (props) => <TableRow {...props} />;

  getAccountRows = () => {
    return this.props.accounts.map(account => this.getRow({
      key: account.id,
      rowClass: 'row-account',
      name: account.name,
      balance: account.state.balance
    }));
  }

  getTotalRow = () => {
    const total = this.props.accounts.reduce((sum, acc) => sum + acc.state.balance, 0);
    return this.getRow({name: 'Total', rowClass: 'row-total', balance: total});
  }

  componentWillMount() {
    this.props.fetchAccounts();
  }

  render() {
    return (
      <Table className="accounts-table" size="sm">
        {this.getHeader()}
        <tbody>
          {this.getAccountRows()}
          {this.getTotalRow()}
        </tbody>
      </Table>
    );
  }
}

const TableRow = ({ name, balance, rowClass }) => (
  <tr className={rowClass}>
    <td>{name}</td>
    <td>{balance}</td>
  </tr>
);

export default AccountsTable;