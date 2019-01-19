import React, { PureComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import 'style/home.css';
import AccountTableContainer from 'components/account/table/accountTableContainer'

export default class HomePage extends PureComponent {

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={4}>
            <AccountTableContainer />
          </Col>
          <Col xs={8}>
            'Right'
          </Col>
        </Row>
      </Container>
    );
  }
}