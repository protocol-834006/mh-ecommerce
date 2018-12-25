import React from 'react';
import './style.scss';
/**
 * All navigation related stuffs should go here
 * @type {React.PureComponent}
 */
const TopHeader = () => (
  <header className="header">
    <div className="header__logo"><img src="assets/img/__logo.png" alt="No logo found" /></div>
    <nav className="navbar">
      <ul className="main-nav">
        <li className="top-level-link">
          <a href="/home"><span>Home</span></a>
        </li>
        <li className="top-level-link">
          <a href="/products" className="mega-menu"><span>Products</span></a>
          <div className="sub-menu-block">
            <h2 className="sub-menu-head">Categories</h2>
            <div className="_products">
              <div className="_products__item">
                <img src="assets/img/drinking.jpg" alt="Not found" />
                <span>Drinking</span>
              </div>

              <div className="_products__item">
                <img src="assets/img/grocery.jpg" alt="Not found" />
                <span>Grocery</span>
              </div>
              <div className="_products__item">
                <img src="assets/img/rice.jpg" alt="Not found" />
                <span>Rice</span>
              </div>
              <div className="_products__item">
                <img src="assets/img/oli.jpg" alt="Not found" />
                <span>Refined oil</span>
              </div>
              <div className="_products__item">
                <img src="assets/img/_01.jpg" alt="Not found" />
                <span>Snacks & Beverages</span>
              </div>
            </div>
          </div>
        </li>
        <li className="top-level-link">
          <a href="/shop"><span>Shop</span></a>
        </li>
        <li className="top-level-link">
          <a href="/service"><span>Service</span></a>
        </li>
      </ul>
    </nav>

    <div className="header__iconBar">
      <nav className="navbar">
        <ul className="main-nav">
          <li className="top-level-link">
            <a className="mega-menu" href="_home">
              <span>
                <i className="fas fa-user" />
              </span>
            </a>
          </li>
          <li className="top-level-link">
            <a href="/cart">
              <span>
                <i className="fas fa-shopping-cart" />
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default TopHeader;
