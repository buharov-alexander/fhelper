import { Record } from 'immutable';

import { SHOW_MODAL, CLOSE_MODAL } from 'constants/actionTypes';

const ModalState = Record({
  modalType: null,
  modalProps: {},
});

export default function moexReducer(state = ModalState({}), action) {
  switch (action.type) {
    case SHOW_MODAL: {
      return state.merge({
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps,
      });
    }
    case CLOSE_MODAL: {
      return ModalState({});
    }
    default:
      return state;
  }
}
