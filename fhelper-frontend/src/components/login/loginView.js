import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'react-bootstrap';

import SignInForm from './signInForm';
import SignUpForm from './signUpForm';

class LoginView extends PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired,
    signIn: PropTypes.func.isRequired,
  };

  handleSignIn = (values) => {
    const { history, signIn } = this.props;
    const { signInLogin, signInPassword } = values;
    signIn({ username: signInLogin, password: signInPassword }, history);
  };

  handleSignUp = (values) => {
    console.log(values);
  };

  render() {
    return (
      <Tabs
        className="form-login-tabs radius-up-left radius-up-right grey margin-vert-auto"
        defaultActiveKey={1}
        variant="pills"
        transition={false}
      >
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
