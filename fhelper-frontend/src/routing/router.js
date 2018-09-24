
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from 'components/login/loginPage';
import NavigationBar from 'components/navbar/navigationBar';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/room" component={NavigationBar} />
    </Switch>
  </BrowserRouter>
);

export default Router;