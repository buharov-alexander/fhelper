import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import 'style/accountsList.css';
import { Card } from 'react-bootstrap';

class accountCard extends PureComponent {
  static propTypes = {
    account: ImmutablePropTypes.record
  };

  render() {
    const { account } = this.props;

    if (!account) {
      return null;
    }

    return (
      <Card>
        <Card.Body>
          <Card.Title>{account.name}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default accountCard;