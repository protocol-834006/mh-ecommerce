import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from '../DashBoard';
import Login from '../../layouts/Login';
import SignUp from '../../layouts/SignUp';
import HomePage from '../../layouts/HomePage';

const App = () => (
  <DashBoard>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/home" component={HomePage} />
    </Switch>
  </DashBoard>
);

export default App;
