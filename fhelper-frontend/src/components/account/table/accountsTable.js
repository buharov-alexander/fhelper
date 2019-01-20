import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import 'style/accountsTable.css';
import { Table } from 'react-bootstrap';

class AccountsTable extends PureComponent {
  static propTypes = {
    accounts: ImmutablePropTypes.list,
    activeAccountId: PropTypes.number,
    fetchAccounts: PropTypes.func.isRequired,
    setActiveAccount: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.fetchAccounts();
  }

  clickOnAccount = (account) => {
    this.props.setActiveAccount(account.id);
  }

  getHeader = () => (
    <thead>
      <tr>
        <th colSpan="2">Accounts</th>
      </tr>
    </thead>
  );

  getRow = (props) => <TableRow {...props} />;

  withValutaSymbol = (balance) =>  (`${balance} ${'\u20bd'}`);

  getAccountRows = () => {
    const {accounts, activeAccountId} = this.props;
    return accounts.map(account => this.getRow({
      key: account.id,
      rowClass: `row-account ${account.id === activeAccountId ? 'active-row' : ''}`,
      name: account.name,
      balance: this.withValutaSymbol(account.state.balance),
      onClick: () => this.clickOnAccount(account),
    }));
  }

  getTotalRow = () => {
    const total = this.props.accounts.reduce((sum, acc) => sum + acc.state.balance, 0);
    return this.getRow({name: 'Total', rowClass: 'row-total', balance: this.withValutaSymbol(total)});
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

const TableRow = ({ name, balance, rowClass, onClick }) => (
  <tr className={rowClass} onClick={onClick}>
    <td>{name}</td>
    <td className="text-right">{balance}</td>
  </tr>
);

export default AccountsTable;