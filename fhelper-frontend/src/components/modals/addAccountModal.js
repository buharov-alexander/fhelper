import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Button, Form, Row, Col,
} from 'react-bootstrap';
import { reduxForm } from 'redux-form';

import FormEntry from 'components/form/formEntry';
import ValutaDropdown from 'components/account/form/valutaDropdown';
import TypeDropdown from 'components/account/form/typeDropdown';
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
        onHide={closeModal}
      >
        <Modal.Header className="card-header">
          <Modal.Title>Add account</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form className="form-add-account" onSubmit={handleSubmit}>
            <Row className="no-margin">
              <Col className="no-padding" md={10}>
                <FormEntry
                  controlId="accountName"
                  type="text"
                  className="grey left-part"
                  name="accountName"
                  placeholder="Account name"
                />
              </Col>
              <Col className="no-padding">
                <TypeDropdown
                  className="right-part"
                  variant="light"
                  onChange={null}
                />
              </Col>
            </Row>
            <Row className="no-margin">
              <Col className="no-padding" md={10}>
                <FormEntry
                  controlId="accountBalance"
                  type="balance"
                  className="grey left-part"
                  name="accountBalance"
                  placeholder="Balance"
                />
              </Col>
              <Col className="no-padding">
                <ValutaDropdown
                  className="right-part"
                  variant="light"
                  onChange={null}
                />
              </Col>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button className="button" variant="light" onClick={closeModal}>Close</Button>
          <Button className="button" variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default reduxForm({ form: 'AddAccountsModal' })(AddAccountsModal);
