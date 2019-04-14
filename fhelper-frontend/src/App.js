import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './App.css';
import configureStore from 'store/configureStore';
import Router from 'routing/router';

const store = configureStore();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#41BB4C',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FF9C27',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Router />
    </MuiThemeProvider>
  </Provider>
);

export default App;
