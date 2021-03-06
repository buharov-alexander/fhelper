import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import 'style/login.css';
import {
  bank, debitCard, piggyBank, money,
} from 'constants/images';
import AbilityCard from './abilityCard';
import LoginViewContainer from './loginViewContainer';

const LoginPage = ({ history }) => (
  <Container fluid>
    <Row>
      <Col className="visible-lg-*" xl={2} />
      <Col md={4} xl={3}>
        <div className="green-gradient login-block">
          <h1 id="login-label" className="white">Welcome</h1>
          <LoginViewContainer history={history} />
        </div>
      </Col>
      <Col md={8} xl={5}>
        <Row>
          <Col md={6}>
            <AbilityCard imageSrc={bank} title="Income" />
          </Col>
          <Col md={6}>
            <AbilityCard imageSrc={debitCard} title="Spending" />
          </Col>
          <Col md={6}>
            <AbilityCard imageSrc={piggyBank} title="Saving" />
          </Col>
          <Col md={6}>
            <AbilityCard imageSrc={money} title="Investment" />
          </Col>
        </Row>
      </Col>
      <Col className="visible-lg-*" md={3} xl={2} />
    </Row>
  </Container>
);

LoginPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default LoginPage;
