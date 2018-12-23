/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../../components/Form';

const { LoginForm } = Form;

class LoginFormLayout extends Component {
  render() {
    const { modelClose } = this.props;
    return (
      <LoginForm />
    )
  }
}

LoginFormLayout.propTypes = {
  /** @type {Function} modelClose */
  modelClose: PropTypes.func.isRequired
};

export default LoginFormLayout;
