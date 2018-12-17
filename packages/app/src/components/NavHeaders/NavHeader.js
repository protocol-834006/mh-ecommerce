import React, { Component } from 'react';
import TopHeader from './TopHeader/TopHeader';
import MainHeader from './MainHeader/MainHeader';
import Model from '../UIComponents/Model/Model';
import LoginForm from '../Accounts/LoginForm/LoginForm';
import './NavHeader.css';

class NavHeader extends Component {
  state = {
    showLoginForm: false
  };
  // Handle Login Model

  closeLoginHandler = () => {
    const { showLoginForm } = this.state;
    this.setState({ showLoginForm: !showLoginForm });
  };

  render() {
    const { showLoginForm } = this.state;
    return (
      <div id="header">
        <Model show={showLoginForm} modelClosed={this.closeLoginHandler}>
          <LoginForm modelClose={this.closeLoginHandler} />
        </Model>
        <TopHeader openLoginModel={this.closeLoginHandler} />
        <MainHeader />
      </div>
    );
  }
}

export default NavHeader;
