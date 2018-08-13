import React from 'react';
import { Tabs, Tab, FormGroup, FormControl, Button } from 'react-bootstrap';

export default class LoginForm extends React.PureComponent {
  static propTypes = {};

  validationLogin = () => {
  }

  changeLogin = () => {
  }

  validationPassword = () => {
  }

  changePassword = () => {
  }


  render() {
    return (
      <Tabs id="form-login-tabs" defaultActiveKey={1}>
        <Tab eventKey={1} title="Log In">
          <form className="form-login">
            <FormGroup
              controlId="formLogin"
              validationState={this.validationLogin}
            >
              <FormControl
                type="text"
                value={null}
                placeholder="Login"
                onChange={this.changeLogin}
              />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup
              controlId="formPassword"
              validationState={this.validationPassword}
            >
              <FormControl
                type="password"
                value={null}
                placeholder="Password"
                onChange={this.changePassword}
              />
              <FormControl.Feedback />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </form>
        </Tab>
        <Tab eventKey={2} title="Sign Up">
          <form className="form-login">
            <FormGroup
              controlId="formSignUpEmail"
            >
              <FormControl
                type="text"
                value={null}
                placeholder="Email"
                onChange={this.changeLogin}
              />
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup
              controlId="formSignUpLogin"
            >
              <FormControl
                type="text"
                value={null}
                placeholder="Login"
                onChange={this.changeLogin}
              />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup
              controlId="formSignUpPassword"
            >
              <FormControl
                type="password"
                value={null}
                placeholder="Password"
                onChange={this.changePassword}
              />
              <FormControl.Feedback />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </form>
        </Tab>
      </Tabs>
    );
  }
}