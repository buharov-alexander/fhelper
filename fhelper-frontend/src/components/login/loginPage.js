import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import LoginForm from 'components/login/loginForm';
import Footer from 'containers/common/footer';

export default class LoginPage extends React.PureComponent {

  render() {
    return (
      <div>
        <main className="login-main">
          <Grid fluid>
            <Row className="row-eq-height">
              <Col className="no-padding">
                <div className="green-gradient login-top-block">
                  <h1 id="login-label" className="white">FHelper</h1>
                  <LoginForm />
                </div>
              </Col>
              <Col>
                <Row className="row-eq-height">
                  <Col>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
          <Grid fluid>
            <Row className="row-eq-height">
              <Col md={12}>
              </Col>
            </Row>
          </Grid>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}