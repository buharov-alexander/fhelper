import { List } from 'immutable';

export const dailyRatesRequest = (valutaCodes, date) => {
  let queryParams = List();
  if (date) {
    queryParams = queryParams.push(`date=${date}`);
  }
  if (valutaCodes) {
    queryParams = queryParams.concat(valutaCodes.map(code => `valutaCodes=${code}`));
  }

  queryParams = queryParams.join('&');
  return fetch(`/fhelper/cbr/rates/daily?${queryParams}`)
    .then(response => response.json());
};
