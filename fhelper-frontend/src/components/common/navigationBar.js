import React from 'react';
import { Navbar } from "react-bootstrap";

import logo from 'logo.svg';
import 'style/navbar.css';

const NavigationBar = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a id="navbar-brand" href="/room">
            <img src={logo} id="app-logo" alt="logo" />FHelper
          </a>
        </Navbar.Brand>
        <Navbar.Toggle id="navbar-toggle"/>
      </Navbar.Header>
    </Navbar>
  )
}

NavigationBar.propTypes = {
};

export default NavigationBar;