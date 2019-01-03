import React from 'react';

/**
 * All navigation related stuffs should go here
 * @type {React.PureComponent}
 */
const TopHeader = () => (
  <header className="header">
    <div className="header-most-top">
      <p>Morning Hopper Offer Zone Top Deals & Discounts</p>
    </div>
    <div className=" header-side header-bot">
      <div className="container">
        <div className="header-main row">
          <div className="brandlogo col-md-4 col-xs-12">
            <h1>
              <a href="index.html">
                <span>M</span>
                oning
                <span>H</span>
                opper
              </a>
            </h1>
          </div>
          <div className="address col-md-8 col-xs-12">
            <div>
              <p>Free Worldwide Shipping</p>
              <span>(+44) 7283643345</span>
            </div>
            <div>
              <button
                className="w3view-cart"
                type="submit"
                name="submit"
                value=""
              >
                <i className="fa fa-cart-arrow-down" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="ban-top">
      <div className="container">
        <div className="agileits-navi_search">
          <form action="#" method="post">
            <select
              id="agileinfo-nav_search"
              name="agileinfo_search"
              required=""
            >
              <option value="">All Categories</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Household">Household</option>
              <option value="Snacks &amp; Beverages">Snacks & Beverages</option>
              <option value="Personal Care">Personal Care</option>
              <option value="Gift Hampers">Gift Hampers</option>
              <option value="Fruits &amp; Vegetables">
                Fruits & Vegetables
              </option>
              <option value="Baby Care">Baby Care</option>
              <option value="Soft Drinks &amp; Juices">
                Soft Drinks & Juices
              </option>
              <option value="Frozen Food">Frozen Food</option>
              <option value="Bread &amp; Bakery">Bread & Bakery</option>
              <option value="Sweets">Sweets</option>
            </select>
          </form>
        </div>
        <div className="top_nav_left">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div
                className="collapse navbar-collapse menu--shylock"
                id="bs-example-navbar-collapse-1"
              >
                <ul className="nav navbar-nav menu__list">
                  <li className="active">
                    <a className="nav-stylehead" href="_blank">
                      Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="">
                    <a className="nav-stylehead" href="_blank">
                      About Us
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="_blank"
                      className="dropdown-toggle nav-stylehead"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Products
                      <span className="caret" />
                    </a>
                    <ul className="dropdown-menu multi-column columns-3">
                      <div className="agile_inner_drop_nav_info">
                        <div className="col-sm-4 multi-gd-img">
                          <ul className="multi-column-dropdown">
                            <li>
                              <a href="product.html">Bakery</a>
                            </li>
                            <li>
                              <a href="product.html">Baking Supplies</a>
                            </li>
                            <li>
                              <a href="product.html">Coffee, Tea & Beverages</a>
                            </li>
                            <li>
                              <a href="product.html">Dried Fruits, Nuts</a>
                            </li>
                            <li>
                              <a href="product.html">Sweets, Chocolate</a>
                            </li>
                            <li>
                              <a href="product.html">Spices & Masalas</a>
                            </li>
                            <li>
                              <a href="product.html">Jams, Honey & Spreads</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-sm-4 multi-gd-img">
                          <ul className="multi-column-dropdown">
                            <li>
                              <a href="product.html">Pickles</a>
                            </li>
                            <li>
                              <a href="product.html">Pasta & Noodles</a>
                            </li>
                            <li>
                              <a href="product.html">Rice, Flour & Pulses</a>
                            </li>
                            <li>
                              <a href="product.html">Sauces & Cooking Pastes</a>
                            </li>
                            <li>
                              <a href="product.html">Snack Foods</a>
                            </li>
                            <li>
                              <a href="product.html">Oils, Vinegars</a>
                            </li>
                            <li>
                              <a href="product.html">Meat, Poultry & Seafood</a>
                            </li>
                          </ul>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </ul>
                  </li>
                  <li className="">
                    <a className="nav-stylehead" href="_blank">
                      Shopping
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      className="nav-stylehead dropdown-toggle"
                      href="_blank"
                      data-toggle="dropdown"
                    >
                      Pages
                      <b className="caret" />
                    </a>
                    <ul className="dropdown-menu agile_short_dropdown">
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="signup.html">Signup</a>
                      </li>
                      <li>
                        <a href="_blank">Orders</a>
                      </li>
                    </ul>
                  </li>

                  <li className="dropdown">
                    <a
                      className="nav-stylehead dropdown-toggle"
                      href="_blank"
                      data-toggle="dropdown"
                    >
                      Account
                      <b className="caret" />
                    </a>
                    <ul className="dropdown-menu agile_short_dropdown">
                      <li>
                        <a href="icons.html">Login</a>
                      </li>
                      <li>
                        <a href="typography.html">Signup</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default TopHeader;
