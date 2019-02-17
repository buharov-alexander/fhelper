import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Modal, Button } from 'react-bootstrap';

class AddAccountsModal extends PureComponent {
  static propTypes = {
    modalProps: PropTypes.object,
  }

  onSubmit = () => {
  }

  render() {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add account</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}

export default AddAccountsModal;
