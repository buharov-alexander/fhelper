import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LoginForm from './loginForm';

export default class LoginPage extends React.PureComponent {
  static propTypes = {};
  
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={4}>
            <LoginForm />
          </Col>
          <Col xs={12} md={8}>
          </Col>
        </Row>
      </Grid>
    );
  }
}