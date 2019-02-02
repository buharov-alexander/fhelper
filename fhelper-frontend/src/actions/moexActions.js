import { List } from 'immutable';

import { dailyIndexRequest } from 'api/moexApi';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
  LOAD_CURRENT_MOEX_INDEXES,
} from 'constants/actionTypes';
import {
  IMOEX,
  RTSI,
} from 'constants/indexCodes';

export const loadCurrentMoexIndexes = () => (dispatch) => {
  dispatch({ type: FETCH_REQUEST, payload: 'loadCurrentMoexIndexes' });
  const indexCodes = List.of(IMOEX, RTSI);

  dailyIndexRequest(indexCodes)
    .then(response => response.json())
    .then((responseJson) => {
      dispatch({ type: LOAD_CURRENT_MOEX_INDEXES, payload: responseJson });
      dispatch({ type: FETCH_SUCCESS, payload: 'loadCurrentMoexIndexes' });
    })
    .catch(error => dispatch({ type: FETCH_FAILED, payload: `loadCurrentMoexIndexes: ${error}` }));
};
