import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import 'style/accountsList.css';
import { ListGroup, Image } from 'react-bootstrap';
import { getAccountIcon, getValutaSymbol } from 'components/account/accountUtil';

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
        <Image className="account-row-icon" src={img} rounded />
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
      <ListGroup>
        {this.getAccountItems()}
      </ListGroup>
    );
  }
}

export default AccountsList;
