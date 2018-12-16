import React, {PureComponent} from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import SignInForm from './signInForm';
import SignUpForm from './signUpForm';

class LoginView extends PureComponent {
  static propTypes = {};

  signIn = values => {
    console.log(values);
  }

  signUp = values => {
    console.log(values);
  }

  render() {
    return (
      <Tabs className="form-login-tabs radius-up-left radius-up-right grey margin-vert-auto"
            defaultActiveKey={1}
            variant="pills">
        <Tab eventKey={1} className="radius-up-left" title="Log In">
          <SignInForm
            onSubmit={this.signIn}
          />
        </Tab>
        <Tab eventKey={2} className="radius-up-right" title="Sign Up">
          <SignUpForm
            onSubmit={this.signUp}
          />
        </Tab>
      </Tabs>
    );
  }
}

export default LoginView;