import React from 'react';
import { Form } from 'react-bootstrap';
import { Field } from 'redux-form';

const ReduxFormControl = ({ input, meta, ...props }) => {
  return <Form.Control {...props} {...input} />
};

const FormEntry = ({ controlId, ...props }) => {
  return (
    <Form.Group controlId={controlId}>
      <Field
        component={ReduxFormControl}
        {...props} />
    </Form.Group>
  );
};

export default FormEntry;
