import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopHeader extends Component {
  state = {
    showDropdownMenu: false
  };

  handleDropDownMenu = () => {
    const { showDropdownMenu } = this.state;
    this.setState({ showDropdownMenu: !showDropdownMenu });
  };

  render() {
    const { openLoginModel, openSignUpModel } = this.props;
    return (
      <div className="header-upper">
        <div className="header-inner container">
          <div className="header-block-flex order-1 mr-auto">
            <nav className="nav nav-sm header-block-flex">
              <a className="nav-link d-md-none" href="login.html">
                <i className="fa fa-user" />
              </a>
              <a
                className="nav-link text-xs text-uppercase d-none d-md-block"
                href="#signup-modal"
                data-toggle="modal"
                onClick={openSignUpModel}
              >
                Sign Up
              </a>
              <a
                className="nav-link text-xs text-uppercase d-none d-md-block"
                href="#login-modal"
                data-toggle="modal"
                onClick={openLoginModel}
              >
                Login
              </a>
            </nav>
            <div className="header-divider header-divider-sm" />
            <div className="dropdown dropdowns-no-carets">
              <a
                href="#en"
                className="nav-link text-xs p-0 dropdown-toggle ml-1"
                data-toggle="dropdown"
                onClick={this.handleDropDownMenu}
              >
                <i className="flag-icon flag-icon-gb" />
              </a>
            </div>
          </div>

          <div className="nav nav-icons header-block order-12">
            <a href="_blank" className="nav-link">
              <i className="fab fa-twitter-square icon-1x" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="_blank" className="nav-link">
              <i className="fab fa-facebook-square icon-1x" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="_blank" className="nav-link">
              <i className="fab fa-linkedin icon-1x" />
              <span className="sr-only">Linkedin</span>
            </a>
            <a href="_blank" className="nav-link">
              <i className="fab fa-google-plus-square icon-1x" />
              <span className="sr-only">Google plus</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

TopHeader.propTypes = {
  openLoginModel: PropTypes.func.isRequired,
  openSignUpModel: PropTypes.func.isRequired
};
export default TopHeader;
