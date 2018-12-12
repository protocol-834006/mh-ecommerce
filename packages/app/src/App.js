import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './layouts/LandingPage';
import SignUp from './layouts/SignUp';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    );
  }
}

export default App;
