import React from 'react';

import {
  Container, Row, Col,
} from 'react-bootstrap';
import 'style/home.css';
import AccountsList from 'components/account/list/accountsListContainer';
import AccountCard from 'components/account/details/accountCardContainer';

const HomePage = () => (
  <Container fluid>
    <Row>
      <Col xs="auto">
        <AccountsList />
      </Col>
      <Col>
        <AccountCard />
      </Col>
    </Row>
  </Container>
);

export default HomePage;
