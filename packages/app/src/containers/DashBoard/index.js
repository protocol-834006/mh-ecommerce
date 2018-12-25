import React from 'react';
import PropTypes from 'prop-types';
import TopHeader from '../../components/Header';

const DashBoard = ({ children }) => (
  <div className="dashboard main_wrapper">
    <TopHeader />
    {children}
  </div>
);

DashBoard.propTypes = {
  children: PropTypes.object.isRequired
};

export default DashBoard;
