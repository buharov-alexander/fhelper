import React from 'react';
// import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { reduxForm } from 'redux-form';

import FormEntry from 'components/form/formEntry';

const SignUpForm = () => (
  <Form className="form-login">
    <FormEntry
      controlId="signUpLogin"
      type="text"
      className="grey"
      name="signUpLogin"
      placeholder="Login" />
    <FormEntry
      controlId="signUpEmail"
      type="text"
      className="grey"
      name="signUpEmail"
      placeholder="Email" />
    <FormEntry
      controlId="signUpPassword"
      type="password"
      className="grey"
      name="signUpPassword"
      placeholder="Password" />
    <Button className="button margin-vert-auto" bsStyle="primary" type="submit">Sign Up</Button>
  </Form>
);

SignUpForm.propTypes = {
};

export default reduxForm({ form: 'SignUpForm' })(SignUpForm);