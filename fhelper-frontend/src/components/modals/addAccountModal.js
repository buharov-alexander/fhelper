import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Modal, Button } from 'react-bootstrap';

class AddAccountsModal extends PureComponent {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
  }

  onSubmit = () => {
  }

  render() {
    const { closeModal } = this.props;
    return (
      <Modal
        show
        size="lg"
        centered
      >
        <Modal.Header>
          <Modal.Title>Add account</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddAccountsModal;
