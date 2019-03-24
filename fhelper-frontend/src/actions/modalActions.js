import { SHOW_MODAL, CLOSE_MODAL } from 'constants/actionTypes';

export const showModal = ({ modalType, modalProps }) => dispatch => (
  dispatch({ type: SHOW_MODAL, payload: { modalType, modalProps } })
);

export const closeModal = () => dispatch => (
  dispatch({ type: CLOSE_MODAL })
);
