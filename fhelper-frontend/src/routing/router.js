
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from 'components/login/loginPage';
import HomePage from 'components/home/homePage';
import NavigationBar from 'components/common/navigationBar';
import FooterContainer from 'components/common/footer/footerContainer';
import RootModalContainer from 'components/modals/rootModalContainer';

const Router = () => (
  <BrowserRouter basename="/fhelper/ui">
    <div id="router">
      <main className="main">
        <NavigationBar />
        <Switch>
          <Route path="/welcome" component={LoginPage} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </main>
      <RootModalContainer />
      <FooterContainer />
    </div>
  </BrowserRouter>
);

export default Router;
