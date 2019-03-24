import { connect } from 'react-redux';

import { closeModal } from 'actions/modalActions';
import RootModal from './rootModal';

const mapStateToProps = state => ({
  modalType: state.modal.modalType,
  modalProps: state.modal.modalProps,
});

export default connect(
  mapStateToProps,
  { closeModal },
)(RootModal);
