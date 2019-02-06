import { List } from 'immutable';

import { dailyIndexRequest } from 'api/moexApi';
import {
  LOAD_CURRENT_MOEX_INDEXES,
} from 'constants/actionTypes';
import {
  IMOEX,
  RTSI,
} from 'constants/indexCodes';
import { request } from './actionUtils';

export const loadCurrentMoexIndexes = () => (dispatch) => {
  const indexCodes = List.of(IMOEX, RTSI);

  request({
    operation: dailyIndexRequest,
    params: indexCodes,
    dispatch,
    type: 'loadCurrentMoexIndexes',
  }).then(indexes => dispatch({ type: LOAD_CURRENT_MOEX_INDEXES, payload: indexes }));
};
