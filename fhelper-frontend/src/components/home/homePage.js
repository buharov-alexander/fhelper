import React from 'react';

import {
  Container, Row, Col, Card,
} from 'react-bootstrap';
import 'style/home.css';
import AccountsListContainer from 'components/account/list/accountsListContainer';
import AccountCardContainer from 'components/account/details/accountCardContainer';

const HomePage = () => (
  <Container fluid>
    <Row>
      <Col xs="auto">
        <Card>
          <Card.Header>Accounts</Card.Header>
          <AccountsListContainer />
        </Card>
      </Col>
      <Col>
        <AccountCardContainer />
      </Col>
    </Row>
  </Container>
);

export default HomePage;
