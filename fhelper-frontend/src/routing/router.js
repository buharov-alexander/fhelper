
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from 'components/login/loginPage';
import NavigationBar from 'components/navbar/navigationBar';
import Footer from 'containers/common/footer';

const Router = () => (
  <BrowserRouter>
    <div>
      <main className="main">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/room" component={NavigationBar} />
        </Switch>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  </BrowserRouter>
);

export default Router;