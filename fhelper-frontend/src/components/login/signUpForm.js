import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { reduxForm } from 'redux-form';

import FormEntry from 'components/form/formEntry';

class SignUpForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  submit = (values) => {
    const { onSubmit, reset } = this.props;
    onSubmit(values);
    reset();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form className="form-login" onSubmit={handleSubmit(this.submit)}>
        <FormEntry
          controlId="signUpLogin"
          type="text"
          className="grey"
          name="signUpLogin"
          placeholder="Login"
        />
        <FormEntry
          controlId="signUpEmail"
          type="text"
          className="grey"
          name="signUpEmail"
          placeholder="Email"
        />
        <FormEntry
          controlId="signUpPassword"
          type="password"
          className="grey"
          name="signUpPassword"
          placeholder="Password"
        />
        <Button className="button margin-vert-auto" variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    );
  }
}

export default reduxForm({ form: 'SignUpForm' })(SignUpForm);
