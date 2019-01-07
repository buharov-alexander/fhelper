import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';

import SignInForm from './signInForm';
import SignUpForm from './signUpForm';

class LoginView extends PureComponent {
  static propTypes = {
    signIn: PropTypes.func.isRequired,
  };

  handleSignIn = values => {
    const { signInLogin, signInPassword } = values;
    this.props.signIn({ username: signInLogin, password: signInPassword }, this.props.history);
  }

  handleSignUp = values => {
    console.log(values);
  }

  render() {
    return (
      <Tabs className="form-login-tabs radius-up-left radius-up-right grey margin-vert-auto"
        defaultActiveKey={1}
        variant="pills">
        <Tab eventKey={1} className="radius-up-left" title="Log In">
          <SignInForm
            onSubmit={this.handleSignIn}
          />
        </Tab>
        <Tab eventKey={2} className="radius-up-right" title="Sign Up">
          <SignUpForm
            onSubmit={this.handleSignUp}
          />
        </Tab>
      </Tabs>
    );
  }
}

export default LoginView;