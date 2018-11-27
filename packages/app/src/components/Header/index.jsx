import React from "react";

/**
 * Header component
 * @type {React.PureComponent}
 */
class Header extends React.PureComponent {
  render() {
    return (
      <div className="header section container">
        <a href="_blank" className="icon">
          Morning hopper
        </a>
      </div>
    );
  }
}

export default Header;
