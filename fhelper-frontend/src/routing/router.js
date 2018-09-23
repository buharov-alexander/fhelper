
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LoginPage from 'components/login/loginPage';

const Router = () => (
  <BrowserRouter>
    <Route path="/login" component={LoginPage} />
  </BrowserRouter>
);

export default Router;