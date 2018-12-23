import React from 'react';
import PropTypes from 'prop-types';
import TopHeader from '../../components/Header';
import Footer from '../../components/Footer';

const DashBoard = ({ children }) => (
  <div className="dashboard">
    <TopHeader />
    {children}
    <Footer />
  </div>
);

DashBoard.propTypes = {
  children: PropTypes.object.isRequired
};

export default DashBoard;
