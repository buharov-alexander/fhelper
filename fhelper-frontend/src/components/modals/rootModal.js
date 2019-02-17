import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import { ADD_ACCOUNT } from 'constants/modalTypes';
import AddAccountModal from './addAccountModal';

const MODAL_COMPONENTS = Map([
  [ADD_ACCOUNT, AddAccountModal],
]);

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS.get(modalType);
  return <SpecificModal {...modalProps} />;
};

ModalRoot.defaultProps = {
  modalType: null,
  modalProps: {},
};

ModalRoot.propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.object,
};

const mapStateToProps = state => ({
  modalType: state.modal.modalType,
  modalProps: state.modal.modalProps,
});

export default connect(
  mapStateToProps,
)(ModalRoot);
