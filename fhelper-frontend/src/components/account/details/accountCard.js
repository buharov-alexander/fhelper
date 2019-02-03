import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import 'style/accountsList.css';
import { Card } from 'react-bootstrap';
import { getAccountType, getValutaSymbol } from 'components/account/accountUtil';

class accountCard extends PureComponent {
  static defaultProps = {
    account: null,
  };

  static propTypes = {
    account: ImmutablePropTypes.record,
  };

  render() {
    const { account } = this.props;

    if (!account) {
      return null;
    }

    const subtitle = `${getAccountType(account)}, ${getValutaSymbol(account.valuta)}`;

    return (
      <Card>
        <Card.Body>
          <Card.Title>{account.name}</Card.Title>
          <Card.Subtitle className="text-muted">{subtitle}</Card.Subtitle>
        </Card.Body>
      </Card>
    );
  }
}

export default accountCard;
