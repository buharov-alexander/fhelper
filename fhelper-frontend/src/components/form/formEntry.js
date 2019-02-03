import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { Field } from 'redux-form';

const ReduxFormControl = ({ input, ...props }) => <Form.Control {...props} {...input} />;

ReduxFormControl.propTypes = {
  input: PropTypes.object.isRequired,
};

const FormEntry = ({ controlId, ...props }) => (
  <Form.Group controlId={controlId}>
    <Field
      component={ReduxFormControl}
      {...props}
    />
  </Form.Group>
);

FormEntry.propTypes = {
  controlId: PropTypes.string.isRequired,
};

export default FormEntry;
