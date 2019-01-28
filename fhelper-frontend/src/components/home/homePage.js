import React, { PureComponent } from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';
import 'style/home.css';
import AccountsListContainer from 'components/account/list/accountsListContainer'

export default class HomePage extends PureComponent {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="auto">
            <Card>
              <Card.Header>Accounts</Card.Header>
              <AccountsListContainer />
            </Card>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    );
  }
}