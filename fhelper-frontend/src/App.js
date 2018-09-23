import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import configureStore from 'store/configureStore';
import Router from 'routing/router';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;