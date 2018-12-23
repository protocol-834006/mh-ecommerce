/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  render() {
    const { modelClose } = this.props;
    return (
      <form>
        <h1>Login Form</h1>
      </form>
    )
  }
}

LoginForm.propTypes = {
  /** @type {Function} modelClose */
  modelClose: PropTypes.func.isRequired
};

export default LoginForm;
