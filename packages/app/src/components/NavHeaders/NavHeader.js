import React, { Component } from 'react';
import TopHeader from './TopHeader/TopHeader';
import MainHeader from './MainHeader/MainHeader';
// import Model from '../UIComponents/Model/Model';
// import LoginForm from '../Accounts/LoginForm/LoginForm';
import './NavHeader.css';

class NavHeader extends Component {
  state = {
    // showLoginForm: false
  };
  // Handle Login Model

  closeLoginHandler = () => {
    console.log('Close Login Handler');
    // let show = !this.state.showLoginForm;
    // this.setState({ showLoginForm: show });
  };

  render() {
    return (
      <div id="header">
        {/* <Model show={this.state.showLoginForm} modelClosed={this.closeLoginHandler}> */}
        {/* <LoginForm modelClose={this.closeLoginHandler} /> */}
        {/* </Model> */}
        <TopHeader openLoginModel={this.closeLoginHandler} />
        <MainHeader />
      </div>
    );
  }
}
export default NavHeader;
