import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Model.css';

class Model extends Component {
  render() {
    const { show, children } = this.props;
    return (
      <div
        className="Modal"
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}
      >
        {children}
      </div>
    );
  }
}

Model.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.array.isRequired
};

Model.defaultProps = {
  show: false
};

export default Model;
