import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import 'style/home.css';
import AccountsListContainer from 'components/account/list/accountsListContainer'

export default class HomePage extends PureComponent {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="auto">
            <AccountsListContainer />
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    );
  }
}