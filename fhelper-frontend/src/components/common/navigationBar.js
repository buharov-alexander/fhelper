import React from 'react';
import { Navbar } from 'react-bootstrap';

import logo from 'logo.svg';
import 'style/navbar.css';

const NavigationBar = () => (
  <Navbar variant="dark" expand="lg">
    <Navbar.Brand>
      <a id="navbar-brand" href="/room">
        <img src={logo} id="app-logo" alt="logo" />
        FHelper
      </a>
    </Navbar.Brand>
    <Navbar.Toggle id="navbar-toggle" aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" />
  </Navbar>
);

export default NavigationBar;
