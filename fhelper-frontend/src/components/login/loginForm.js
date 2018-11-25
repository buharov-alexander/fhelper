import React from 'react';
import { Tabs, Tab, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

import { required } from 'components/form/formValidation';

const ReduxFormControl = ({ input, meta, ...props }) => {
  return <FormControl {...props} {...input} />
};

class LoginForm extends React.PureComponent {
  static propTypes = {};

  render() {
    return (
      <Tabs id="form-login-tabs" className="grey margin-vert-auto" defaultActiveKey={1}>
        <Tab eventKey={1} title="Log In">
          <form className="form-login">
            <FormGroup
              controlId="formLogin">
              <Field
                className="grey"
                name="login"
                type="text"
                placeholder="Login"
                validate={required}
                component={ReduxFormControl} />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup
              controlId="formPassword">
              <Field
                className="grey"
                name="password"
                type="password"
                placeholder="Password"
                component={ReduxFormControl} />
              <FormControl.Feedback />
            </FormGroup>
            <Button className="button margin-vert-auto" bsStyle="primary" type="submit">Log In</Button>
          </form>
        </Tab>
        <Tab eventKey={2} title="Sign Up">
          <form className="form-login">
            <FormGroup
              controlId="formSignUpEmail">
              <Field
                className="grey"
                name="email"
                type="text"
                placeholder="Email"
                component={ReduxFormControl} />
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup
              controlId="formSignUpLogin">
              <Field
                className="grey"
                name="login"
                type="text"
                placeholder="Login"
                component={ReduxFormControl} />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup
              controlId="formSignUpPassword">
              <Field
                className="grey"
                name="password"
                type="password"
                placeholder="Password"
                component={ReduxFormControl} />
              <FormControl.Feedback />
            </FormGroup>
            <Button className="button margin-vert-auto" bsStyle="primary" type="submit">Sign Up</Button>
          </form>
        </Tab>
      </Tabs>
    );
  }
}

LoginForm = reduxForm({ form: 'LoginForm' })(LoginForm);
export default LoginForm;