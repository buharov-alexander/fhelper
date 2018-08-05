import React from 'react';
import { Navbar } from "react-bootstrap";
import logo from '../../../logo.svg';

const NavigationBar = () => {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">
            <img src={logo} id="app-logo" alt="logo" />FHelper
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    </Navbar>
  )
}

NavigationBar.propTypes = {
};

export default NavigationBar;