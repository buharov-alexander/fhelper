import React from 'react';
// import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { reduxForm } from 'redux-form';

import FormEntry from 'components/form/formEntry';

const SignInForm = () => (
  <Form className="form-login">
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
    <Button className="button margin-vert-auto" bsStyle="primary" type="submit">Sign In</Button>
  </Form>
);

SignInForm.propTypes = {
};

export default reduxForm({ form: 'SignInForm' })(SignInForm);