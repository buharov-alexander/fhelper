import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import LoginForm from 'components/login/loginForm';
import AbilityCard from 'components/widgets/abilityCard';
import { bank, debitCard, piggyBank, money } from 'constants/images';


export default class LoginPage extends React.PureComponent {

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col className="no-padding" sm={4} md={3} lg={2}>
            <div className="green-gradient login-block">
              <h1 id="login-label" className="white">FHelper</h1>
              <LoginForm />
            </div>
          </Col>
          <Col className="visible-lg-*" lg={2} />
          <Col sm={8} md={9} lg={6}>
            <Row>
              <Col sm={6}>
                <AbilityCard imageSrc={bank} title="Income" />
              </Col>
              <Col sm={6}>
                <AbilityCard imageSrc={debitCard} title="Spending"/>
              </Col>
              <Col sm={6}>
                <AbilityCard imageSrc={piggyBank} title="Saving"/>
              </Col>
              <Col sm={6}>
                <AbilityCard imageSrc={money} title="Investment"/>
              </Col>
            </Row>
          </Col>
          <Col className="visible-lg-*" lg={2} />
        </Row>
      </Grid>
    );
  }
}