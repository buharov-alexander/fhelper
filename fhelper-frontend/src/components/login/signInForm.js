import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { reduxForm } from 'redux-form';

import FormEntry from 'components/form/formEntry';

class SignInForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  submit = values => {
    const {onSubmit, reset} = this.props;
    onSubmit(values);
    reset();
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <Form className="form-login" onSubmit={handleSubmit(this.submit)}>
        <FormEntry
          controlId="signInLogin"
          type="text"
          className="grey"
          name="signInLogin"
          placeholder="Login" />
        <FormEntry
          controlId="signInPassword"
          type="password"
          className="grey"
          name="signInPassword"
          placeholder="Password" />
        <Button className="button margin-vert-auto" variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    );
  }
}

export default reduxForm({ form: 'SignInForm' })(SignInForm);