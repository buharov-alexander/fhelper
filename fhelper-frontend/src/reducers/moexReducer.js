import { Map } from 'immutable';

import {
  LOAD_CURRENT_MOEX_INDEXES,
} from 'constants/actionTypes';

const initialState = {
  currentIndexes: Map(),
};

const saveCurrentIndexes = (state, indexes) => {
  const indexesMap = indexes.reduce(
    (map, index) => map.set(index.name, index),
    Map(),
  );
  return Object.assign({}, state, { currentIndexes: indexesMap });
};

export default function moexReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CURRENT_MOEX_INDEXES: {
      return saveCurrentIndexes(state, action.payload);
    }
    default:
      return state;
  }
}
