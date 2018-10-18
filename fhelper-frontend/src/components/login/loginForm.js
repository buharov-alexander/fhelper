import React from 'react';
import { Tabs, Tab, FormGroup, FormControl, Button } from 'react-bootstrap';

export default class LoginForm extends React.PureComponent {
  static propTypes = {};

  validationLogin = () => {
    return null;
  }

  changeLogin = () => {
    return null;
  }

  validationPassword = () => {
    return null;
  }

  changePassword = () => {
    return null;
  }


  render() {
    return (
      <Tabs id="form-login-tabs" className="grey margin-vert-auto" defaultActiveKey={1}>
        <Tab eventKey={1} title="Log In">
          <form className="form-login">
            <FormGroup
              controlId="formLogin"
              validationState={this.validationLogin()}
            >
              <FormControl
                className="grey"
                type="text"
                value={""}
                placeholder="Login"
                onChange={this.changeLogin}
              />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup
              controlId="formPassword"
              validationState={this.validationPassword()}
            >
              <FormControl
                className="grey"
                type="password"
                value={""}
                placeholder="Password"
                onChange={this.changePassword}
              />
              <FormControl.Feedback />
            </FormGroup>
            <Button className="button margin-vert-auto" bsStyle="primary" type="submit">Log In</Button>
          </form>
        </Tab>
        <Tab eventKey={2} title="Sign Up">
          <form className="form-login">
            <FormGroup
              controlId="formSignUpEmail"
            >
              <FormControl
                className="grey"
                type="text"
                value={""}
                placeholder="Email"
                onChange={this.changeLogin}
              />
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup
              controlId="formSignUpLogin"
            >
              <FormControl
                className="grey"
                type="text"
                value={""}
                placeholder="Login"
                onChange={this.changeLogin}
              />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup
              controlId="formSignUpPassword"
            >
              <FormControl
                className="grey"
                type="password"
                value={""}
                placeholder="Password"
                onChange={this.changePassword}
              />
              <FormControl.Feedback />
            </FormGroup>
            <Button className="button margin-vert-auto" bsStyle="primary" type="submit">Sign Up</Button>
          </form>
        </Tab>
      </Tabs>
    );
  }
}