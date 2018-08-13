import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/common/header/navbar';
import LoginPage from './components/login/loginPage';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <LoginPage />
      </div>
    );
  }
}

export default App;