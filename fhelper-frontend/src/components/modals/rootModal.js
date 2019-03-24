import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';

import { ADD_ACCOUNT } from 'constants/modalTypes';
import AddAccountModal from './addAccountModal';

const MODAL_COMPONENTS = Map([
  [ADD_ACCOUNT, AddAccountModal],
]);

const RootModal = ({ modalType, ...props }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS.get(modalType);
  return <SpecificModal {...props} />;
};

RootModal.defaultProps = {
  modalType: null,
  modalProps: {},
};

RootModal.propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.object,
};

export default RootModal;
