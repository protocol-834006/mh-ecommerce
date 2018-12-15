import React, { Component } from 'react';
import MeghaMenu from './MeghaMenu/MeghaMenu';
import './MainHeader.css';

class MainHeader extends Component {
  state = {
    showMeghaMenu: false
  };

  // Handle MeghaMenu

  handleMeghaMenu = () => {
    const { showMeghaMenu } = this.state;
    const show = !showMeghaMenu;
    this.setState({ showMeghaMenu: show });
  };

  render() {
    const { showMeghaMenu } = this.state;
    return (
      <div className="header">
        <div className="header-inner container">
          <div className="header-brand">
            <a className="header-brand-text" href="index.html" title="Home">
              <h1 className="h2">
                <span className="header-brand-text-alt">App</span>
                Strap
                <span className="header-brand-text-alt">.</span>
              </h1>
            </a>
            <div className="header-divider d-none d-lg-block" />
            <div className="header-slogan d-none d-lg-block">Bootstrap 4 Theme</div>
          </div>

          <div className="header-block order-12">
            <a
              href="#search"
              className="btn btn-icon btn-link header-btn float-right order-11"
              data-toggle="search-form"
              data-target=".header-search"
            >
              <i className="fa fa-search fa-flip-horizontal search-icon" />
            </a>
            <a
              href="#top"
              className="btn btn-link btn-icon header-btn float-right d-lg-none"
              data-toggle="off-canvas"
              data-target=".navbar-main"
              data-settings='{"cloneTarget":true, "targetClassExtras": "navbar-offcanvas"}'
            >
              {' '}
              <i className="fa fa-bars" />
            </a>
            <a
              href="_blank"
              title="Click me you'll get a surprise"
              className="btn btn-icon btn-link header-btn float-right order-last"
              data-toggle="off-canvas"
              data-target="#offcanvas-sidebar"
              data-settings='{"cloneTarget":false}'
            >
              {' '}
              <i className="ion-android-more-vertical" />
            </a>
          </div>

          <div className="navbar navbar-expand-md navbar-static-top">
            <div className="navbar-main collapse">
              <ul className="nav navbar-nav navbar-nav-stretch float-lg-right dropdown-effect-fade">
                <li className="nav-item dropdown dropdown-mega-menu active">
                  <a
                    href="_blank"
                    className="nav-link dropdown-toggle"
                    id="indexs-drop"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    {' '}
                    <i className="fa fa-home nav-link-icon" />
                    <span className="d-none">Home</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="_blank"
                    className="nav-link dropdown-toggle"
                    id="pages-drop"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    Products
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="_blank"
                    className="nav-link dropdown-toggle"
                    id="pages-drop"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    Shopping
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="_blank"
                    className="nav-link dropdown-toggle"
                    id="pages-drop"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    Servies
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="_blank"
                    className="nav-link dropdown-toggle"
                    id="pages-drop"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    Contact
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="_blank"
                    className="nav-link dropdown-toggle"
                    id="pages-drop"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    About
                  </a>
                </li>

                <li className="nav-item dropdown dropdown-persist dropdown-mega-menu dropdown-mega-menu-50 open">
                  <a
                    href="_blank"
                    className="nav-link dropdown-toggle"
                    id="megamenu-drop"
                    data-toggle="dropdown"
                    onClick={this.handleMeghaMenu}
                    data-hover="dropdown"
                  >
                    Mega Menu
                  </a>
                  <MeghaMenu show={showMeghaMenu} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
