import React from 'react';
import PropTypes from 'prop-types';

const smDropdownMenu = ({ show }) => (
  <div
    className="dropdown-menu dropdown-menu-sm rounded dropdown-menu-arrow border-w-2 ml-2-neg"
    style={{ display: show ? 'block' : 'none' }}
  >
    <a href="#es" className="dropdown-item lang-es">
      <i className="flag-icon flag-icon-es" />
      Spanish
    </a>
    <a href="#pt" className="dropdown-item lang-pt">
      <i className="flag-icon flag-icon-pt" />
      Portguese
    </a>
    <a href="#cn" className="dropdown-item lang-cn">
      <i className="flag-icon flag-icon-cn" />
      Chinese
    </a>
    <a href="#se" className="dropdown-item lang-se">
      <i className="flag-icon flag-icon-se" />
      Swedish
    </a>
  </div>
);

smDropdownMenu.propTypes = {
  show: PropTypes.bool
};

smDropdownMenu.defaultProps = {
  show: false
};

export default smDropdownMenu;
