import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import 'style/home.css';
import AccountsTableContainer from 'components/account/table/accountsTableContainer'

export default class HomePage extends PureComponent {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs="auto">
            <AccountsTableContainer />
          </Col>
          <Col>
            'Right'
          </Col>
        </Row>
      </Container>
    );
  }
}