import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ErrorMessage = styled.div`
  color : red;
  padding: 1em;
  font-size: 12px;
  font-style: italic;
`;

const InputFeedback = ({ error }) => (error
  ? (<ErrorMessage>{error}</ErrorMessage>) : null);

InputFeedback.propTypes = {
  error: PropTypes.bool
};

InputFeedback.defaultProps = {
  error: null
};

export default InputFeedback;
