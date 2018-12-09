import React from 'react';
import { Tabs, Tab, Form, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

import FormEntry from 'components/form/formEntry'

class LoginView extends React.PureComponent {
  static propTypes = {};

  render() {
    return (
      <Tabs className="form-login-tabs radius-up-left radius-up-right grey margin-vert-auto"
            defaultActiveKey={1}
            variant="pills">
        <Tab eventKey={1} className="radius-up-left" title="Log In">
          <Form className="form-login"> 
            <FormEntry
              controlId="signInLogin"
              type="text"
              className="grey"
              name="login"
              placeholder="Login" />
            <FormEntry
              controlId="signInPassword"
              type="password"
              className="grey"
              name="password"
              placeholder="Password"/>
            <Button className="button margin-vert-auto" bsStyle="primary" type="submit">Log In</Button>
          </Form>
        </Tab>
        <Tab eventKey={2} className="radius-up-right" title="Sign Up">
          <Form className="form-login">
            <FormEntry
              controlId="signUpLogin"
              type="text"
              className="grey"
              name="login"
              placeholder="Login" />
            <FormEntry
              controlId="signUpEmail"
              type="text"
              className="grey"
              name="email"
              placeholder="Email" />
            <FormEntry
              controlId="signUpPassword"
              type="password"
              className="grey"
              name="password"
              placeholder="Password" />
            <Button className="button margin-vert-auto" bsStyle="primary" type="submit">Sign Up</Button>
          </Form>
        </Tab>
      </Tabs>
    );
  }
}

LoginView = reduxForm({ form: 'LoginView' })(LoginView);
export default LoginView;