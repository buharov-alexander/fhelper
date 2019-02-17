import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Card, ListGroup, Image } from 'react-bootstrap';

import 'style/accountsList.css';
import { ADD_ACCOUNT } from 'constants/modalTypes';
import { getAccountIcon, getValutaSymbol } from 'components/account/accountUtil';
import { add } from 'constants/images';

class AccountsList extends PureComponent {
  static defaultProps = {
    activeAccountId: null,
  };

  static propTypes = {
    accounts: ImmutablePropTypes.list.isRequired,
    activeAccountId: PropTypes.number,
    fetchAccounts: PropTypes.func.isRequired,
    fetchAccountStates: PropTypes.func.isRequired,
    setActiveAccount: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
  };

  componentWillMount() {
    const { fetchAccounts } = this.props;
    fetchAccounts();
  }

  clickOnAccount = (account) => {
    const { setActiveAccount, fetchAccountStates } = this.props;
    setActiveAccount(account.id);
    fetchAccountStates(account.id);
  }

  openAddAccountModal = () => {
    const { showModal } = this.props;
    showModal({
      modalType: ADD_ACCOUNT,
      modalProps: {},
    });
  }

  getItem = (account) => {
    const { activeAccountId } = this.props;
    const active = account.id === activeAccountId;

    const itemClass = `account-item ${active ? 'active-item' : ''}`;
    const img = getAccountIcon({ account, active });
    return (
      <ListGroup.Item
        action
        className={itemClass}
        key={account.id}
        onClick={() => this.clickOnAccount(account)}
      >
        <Image className="account-icon" src={img} rounded />
        <div className="account-row-name">
          {account.name}
        </div>
        <div className="account-row-balance">
          {`${account.state.balance} ${getValutaSymbol(account.valuta)}`}
        </div>
      </ListGroup.Item>
    );
  };

  getAccountItems = () => {
    const { accounts } = this.props;
    return accounts.map(account => this.getItem(account));
  }

  getTotalRow = () => {
    const { accounts } = this.props;
    const total = accounts.reduce((sum, acc) => sum + acc.state.balance, 0);
    return this.getRow({ name: '', rowClass: 'row-total', balance: this.withValutaSymbol(total) });
  }

  render() {
    return (
      <Card>
        <Card.Header className="account-list-header">
          <div className="accounts-title">
            Accounts
          </div>
          <Image className="account-icon button" src={add} onClick={this.openAddAccountModal} />
        </Card.Header>
        <ListGroup>
          {this.getAccountItems()}
        </ListGroup>
      </Card>
    );
  }
}

export default AccountsList;
