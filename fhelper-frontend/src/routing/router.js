
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from 'components/login/loginPage';
import NavigationBar from 'components/common/navigationBar';
import FooterContainer from 'containers/common/footerContainer';

const Router = () => (
  <BrowserRouter basename="/fhelper/ui">
    <div id="router">
      <main className="main">
        <NavigationBar />
        <Switch>
          <Route path="/welcome" component={LoginPage} />
          <Route path="/room" component={null} />
        </Switch>
      </main>
      <FooterContainer />
    </div>
  </BrowserRouter>
);

export default Router;