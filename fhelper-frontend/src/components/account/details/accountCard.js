import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import 'style/accountsList.css';
import { Card } from 'react-bootstrap';

import 'style/accountCard.css';
import { getAccountType, getValutaSymbol } from 'components/account/accountUtil';
import AccountStatesTabs from './accountStatesTabs';

class AccountCard extends PureComponent {
  static defaultProps = {
    account: null,
    accountStates: null,
  };

  static propTypes = {
    account: ImmutablePropTypes.record,
    accountStates: ImmutablePropTypes.list,
  };

  render() {
    const { account, accountStates } = this.props;

    if (!account || !accountStates) {
      return null;
    }

    const subtitle = `${getAccountType(account)}, ${getValutaSymbol(account.valuta)}`;

    return (
      <Card className="account-card">
        <Card.Body>
          <Card.Title>{account.name}</Card.Title>
          <Card.Subtitle className="text-muted">{subtitle}</Card.Subtitle>
          <AccountStatesTabs
            accountStates={accountStates}
          />
        </Card.Body>
      </Card>
    );
  }
}

export default AccountCard;
