import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Button, Form, Row, Col, Dropdown, DropdownButton,
} from 'react-bootstrap';
import { reduxForm } from 'redux-form';

import FormEntry from 'components/form/formEntry';
import 'style/modals.css';

class AddAccountsModal extends PureComponent {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }

  render() {
    const { closeModal, handleSubmit } = this.props;
    return (
      <Modal
        className="modal"
        show
        centered
      >
        <Modal.Header>
          <Modal.Title>Add account</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form className="form-add-account" onSubmit={handleSubmit}>
            <Row className="no-margin">
              <Col className="no-padding" md={8}>
                <FormEntry
                  controlId="accountName"
                  type="text"
                  className="grey left-part"
                  name="accountName"
                  placeholder="Account name"
                />
              </Col>
              <Col className="no-padding">
                <DropdownButton className="right-part" variant="secondary" title="Dropdown">
                  <Dropdown.Item>Action</Dropdown.Item>
                </DropdownButton>
              </Col>
            </Row>
            <Row className="no-margin">
              <Col className="no-padding" md={8}>
                <FormEntry
                  controlId="accountBalance"
                  type="balance"
                  className="grey left-part"
                  name="accountBalance"
                  placeholder="Balance"
                />
              </Col>
              <Col className="no-padding">
                <DropdownButton className="right-part" variant="secondary" title="Dropdown">
                  <Dropdown.Item>Action</Dropdown.Item>
                </DropdownButton>
              </Col>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button className="button" variant="secondary" onClick={closeModal}>Close</Button>
          <Button className="button" variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default reduxForm({ form: 'AddAccountsModal' })(AddAccountsModal);
