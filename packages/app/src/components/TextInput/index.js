import React from 'react';
import PropTypes from 'prop-types';
import InputFeedback from '../InputFeedback';

const TextInput = ({
  error,
  name,
  onChange,
  type,
  value,
  ...props
}) => (
  <React.Fragment>
    <input className="input-group" name={name} type={type} value={value} onChange={e => onChange(e)} {...props} />
    <InputFeedback error={error} name={name} />
  </React.Fragment>
);

TextInput.propTypes = {
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string
};

TextInput.defaultProps = {
  error: null,
  value: ''
};

export default TextInput;
