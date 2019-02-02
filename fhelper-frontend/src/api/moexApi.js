import { List } from 'immutable';

export const dailyIndexRequest = (indexCodes) => {
  let queryParams = List();
  if (indexCodes) {
    queryParams = queryParams.concat(indexCodes.map(code => `indexCodes=${code}`));
  }

  queryParams = queryParams.join('&');
  return fetch(`/fhelper/moex/index/daily?${queryParams}`);
};
