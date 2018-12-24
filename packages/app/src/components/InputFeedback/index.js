import React from 'react';
import PropTypes from 'prop-types';

const InputFeedback = ({ error }) => (error ? <div className="input-feedback">{error}</div> : null);

InputFeedback.propTypes = {
  error: PropTypes.bool
};

InputFeedback.defaultProps = {
  error: null
};

export default InputFeedback;
