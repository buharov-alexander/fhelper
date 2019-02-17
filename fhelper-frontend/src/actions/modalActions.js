import { SHOW_MODAL } from 'constants/actionTypes';

export const showModal = ({ modalType, modalProps }) => dispatch => (
  dispatch({ type: SHOW_MODAL, payload: { modalType, modalProps } })
);
