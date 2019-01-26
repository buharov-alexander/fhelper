import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import 'style/accountsList.css';
import { ListGroup } from 'react-bootstrap';

class AccountsList extends PureComponent {
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

  withValutaSymbol = (balance) =>  (`${balance} ${'\u20bd'}`);

  getItem = (props) => <ListItem {...props} />;

  getAccountItems = () => {
    const {accounts, activeAccountId} = this.props;
    return accounts.map(account => this.getItem({
      key: account.id,
      itemClass: `account-item ${account.id === activeAccountId ? 'active-item' : ''}`,
      name: account.name,
      balance: this.withValutaSymbol(account.state.balance),
      onClick: () => this.clickOnAccount(account),
    }));
  }

  getTotalRow = () => {
    const total = this.props.accounts.reduce((sum, acc) => sum + acc.state.balance, 0);
    return this.getRow({name: '', rowClass: 'row-total', balance: this.withValutaSymbol(total)});
  }

  render() {
    return (
      <ListGroup>
        {this.getAccountItems()}
      </ListGroup>
    );
  }
}

const ListItem = ({ name, balance, itemClass, onClick }) => (
  <ListGroup.Item action onClick={onClick} className={itemClass}>
    {name}
    <span className='float-right'>{balance}</span>
  </ListGroup.Item>
);

export default AccountsList;