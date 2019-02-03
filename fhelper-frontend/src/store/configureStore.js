import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'reducers/rootReducer';

const configureStore = () => createStore(
  rootReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), /* eslint no-underscore-dangle: 0 */
  applyMiddleware(
    thunk,
  ),
);

export default configureStore;
