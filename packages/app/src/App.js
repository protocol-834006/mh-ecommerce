import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './layouts/Login';
import SignUp from './layouts/SignUp';
import HomePage from './layouts/HomePage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={HomePage} />
      </Switch>
    );
  }
}

export default App;
