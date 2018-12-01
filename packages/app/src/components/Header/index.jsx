import React from "react";

/**
 * Header component
 * @type {React.PureComponent}
 */
class Header extends React.PureComponent {
  render() {
    return (
      <div id="header">
        <div data-toggle="sticky">
          <div class="header-search collapse" id="search">
            <form class="search-form container">
              <input
                type="text"
                name="search"
                class="form-control search"
                value=""
                placeholder="Search"
              />
              <button type="button" class="btn btn-link">
                <span class="sr-only">Search </span>
                <i class="fa fa-search fa-flip-horizontal search-icon" />
              </button>
              <button
                type="button"
                class="btn btn-link close-btn"
                data-toggle="search-form-close"
              >
                <span class="sr-only">Close </span>
                <i class="fa fa-times search-icon" />
              </button>
            </form>
          </div>
          <div class="header">
            <div class="header-inner container">
              <div class="header-brand">
                <a class="header-brand-text" href="index.html" title="Home">
                  <h1 class="h2">
                    <span class="header-brand-text-alt">Morning</span>Hopper
                    <span class="header-brand-text-alt">.</span>
                  </h1>
                </a>
                <div class="header-divider d-none d-lg-block" />
                <div class="header-slogan d-none d-lg-block">Shop UI</div>
              </div>
              <div class="header-block order-12">
                <div class="flex-column text-right d-none d-lg-flex mr-2">
                  <h6 class="my-0 mb-1">
                    <i class="fa fa-truck text-primary" /> Free Worldwide
                    Shipping
                  </h6>
                  <h6 class="my-0 text-muted font-weight-normal">
                    <i class="fa fa-phone text-primary" /> (+44) 7283643345
                  </h6>
                </div>

                <a
                  href="#search"
                  class="btn btn-icon btn-link header-btn float-right order-11"
                  data-toggle="search-form"
                  data-target=".header-search"
                >
                  <i class="fa fa-search fa-flip-horizontal search-icon" />
                </a>
                <a
                  href="#top"
                  class="btn btn-link btn-icon header-btn float-right d-lg-none"
                  data-toggle="off-canvas"
                  data-target=".navbar-main"
                  data-settings='{"cloneTarget":true, "targetClassExtras": "navbar-offcanvas"}'
                >
                  {" "}
                  <i class="fa fa-bars" />{" "}
                </a>
                <div class="header-divider d-none d-lg-block" />

                <div class="dropdown dropdowns-no-carets dropdown-effect-fadeup float-right">
                  <a
                    href="#"
                    class="btn btn-icon btn-dark btn-link float-right dropdown-toggle cart-link"
                    data-toggle="dropdown"
                  >
                    <span class="cart-link-icon">
                      {" "}
                      <i class="fa fa-shopping-cart" />{" "}
                      <span class="sr-only">Cart</span>{" "}
                      <span class="cart-link-count bg-primary text-white">
                        3
                      </span>{" "}
                    </span>
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-right dropdown-menu-arrow cart-dropdown-menu"
                    role="menu"
                  >
                    <h5 class="dropdown-header mb-0">Your Shopping Cart</h5>
                    <hr class="mt-0 mb-3" />
                    <div class="cart-items">
                      <div class="cart-items-item">
                        <a href="#" class="cart-img mr-2 float-left">
                          <img
                            class="img-fluid"
                            src="assets/img/shop/gloves-1-thumb.jpg"
                            alt="Product 1"
                          />
                        </a>
                        <div class="float-left">
                          <h5 class="mb-0">Gloves</h5>
                          <p class="mb-0">$18.99 / x2</p>
                          <a href="#" class="close cart-remove text-primary">
                            {" "}
                            <i class="fa fa-times" />{" "}
                          </a>
                        </div>
                      </div>
                      <div class="cart-items-item">
                        <a href="#" class="cart-img mr-2 float-left">
                          <img
                            class="img-fluid"
                            src="assets/img/shop/shoes-1-thumb.jpg"
                            alt="Product 2"
                          />
                        </a>
                        <div class="float-left">
                          <h5 class="mb-0">Shoes</h5>
                          <p class="mb-0">$12.99 / x1</p>
                          <a href="#" class="close cart-remove text-primary">
                            {" "}
                            <i class="fa fa-times" />{" "}
                          </a>
                        </div>
                      </div>
                      <div class="cart-items-item">
                        <a href="#" class="cart-img mr-2 float-left">
                          <img
                            class="img-fluid"
                            src="assets/img/shop/gloves-1-thumb.jpg"
                            alt="Product 1"
                          />
                        </a>
                        <div class="float-left">
                          <h5 class="mb-0">Gloves</h5>
                          <p class="mb-0">$18.99 / x2</p>
                          <a href="#" class="close cart-remove text-primary">
                            {" "}
                            <i class="fa fa-times" />{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <hr class="mt-3 mb-0" />
                    <div class="dropdown-footer text-center">
                      <h5 class="font-weight-bold">
                        Total: <span class="text-primary">$50.97</span>
                      </h5>
                      <a
                        href="shop-cart.html"
                        tabindex="-1"
                        class="btn btn-outline-primary btn-sm btn-rounded mx-2"
                      >
                        View Cart
                      </a>{" "}
                      <a
                        href="shop-checkout.html"
                        tabindex="-1"
                        class="btn btn-primary btn-sm btn-rounded mx-2"
                      >
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="navbar navbar-expand-md">
            <div class="navbar-main collapse bg-grey-dark navbar-dark">
              <div class="container clearfix">
                <ul class="nav navbar-nav float-lg-left navbar-nav-flush dropdown-effect-fadeup">
                  <li class="nav-item">
                    {" "}
                    <a href="shop.html" class="nav-link">
                      Shop Home
                    </a>{" "}
                  </li>

                  <li class="nav-item dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      id="pages-drop"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                    >
                      Shop Pages
                    </a>
                    <div class="dropdown-menu">
                      {" "}
                      <a href="shop-grid.html" class="dropdown-item">
                        Products Grid
                      </a>{" "}
                      <a href="shop-list.html" class="dropdown-item">
                        Products List
                      </a>{" "}
                      <a href="shop-product.html" class="dropdown-item">
                        Product View
                      </a>{" "}
                      <a href="shop-cart.html" class="dropdown-item">
                        Cart
                      </a>{" "}
                      <a href="shop-checkout.html" class="dropdown-item">
                        Checkout
                      </a>{" "}
                      <a href="shop-confirmation.html" class="dropdown-item">
                        Confirmation
                      </a>{" "}
                    </div>
                  </li>
                  <li class="nav-item dropdown dropdown-mega-menu dropdown-persist active">
                    <a
                      href="shop.html"
                      class="nav-link dropdown-toggle"
                      id="shop-mega-menu"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                    >
                      Shop Mega Menu
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right dropdown-menu-nobullets"
                      aria-labelledby="shop-mega-menu"
                    >
                      <div class="row">
                        <div class="col-lg-9">
                          <div class="row">
                            <div class="col-lg-3 dropdown-icons-default">
                              <h3 class="dropdown-header mb-0">Mens</h3>
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Shoes
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Shirts
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Trousers
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Suits
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Jackets
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Sportswear
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Shorts
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Swimwear
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                T-shirts
                              </a>
                            </div>
                            <div class="col-lg-3 dropdown-icons-default">
                              <h3 class="dropdown-header mb-0">Womens</h3>
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Dresses
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Jeans
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Skirts
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Suits
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Jackets
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Sportswear
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Shorts
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Swimwear
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                T-shirts
                              </a>
                            </div>
                            <div class="col-lg-3">
                              <h3 class="dropdown-header mb-0">Childrens</h3>
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Shoes
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Sports Wear
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                School Clothes
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Trousers
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Suits
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Jackets
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Sportswear
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Swimwear
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                T-shirts
                              </a>
                            </div>
                            <div class="col-lg-3 dropdown-icons-default">
                              <h3 class="dropdown-header mb-0">Baby</h3>
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Newborn
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Toddler
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Preschool
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Winter Suits
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Jackets
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Sportswear
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Swimwear
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                T-shirts
                              </a>{" "}
                              <a
                                href=".html"
                                class="dropdown-item"
                                tabindex="-1"
                              >
                                Trousers
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 d-none d-lg-block">
                          <h3 class="dropdown-header">
                            New Arrivals{" "}
                            <span class="badge badge-primary text-uppercase">
                              Hot
                            </span>
                          </h3>
                          <div class="dropdown-widget">
                            <div
                              class="products-carousel owl-nav-over"
                              data-toggle="owl-carousel"
                              data-owl-carousel-settings='{"items": 1,"responsive":{"0":{"items":1,"nav":true, "dots":false}}}'
                            >
                              <a href="#">
                                <img
                                  src="assets/img/shop/jacket-1.jpg"
                                  alt="Item 1 image"
                                  class="lazyOwl img-fluid"
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="assets/img/shop/jacket-2.jpg"
                                  alt="Item 2 image"
                                  class="lazyOwl img-fluid"
                                />
                              </a>
                              <a href="#">
                                <img
                                  src="assets/img/shop/jacket-3.jpg"
                                  alt="Item 3 image"
                                  class="lazyOwl img-fluid"
                                />
                              </a>
                            </div>
                          </div>
                          <h3 class="dropdown-header">Nov 2018 Offers</h3>
                          <div
                            class="p-3 overlay overlay-op-5 rounded flex-valign"
                            data-bg-img="assets/img/shop/promo-truck.jpg"
                            data-css='{"background-position":"center bottom"}'
                            data-url="shop-product.html"
                          >
                            <h4 class="text-white mb-0">Free Shipping</h4>
                            <p class="text-white mb-0">
                              On all orders over $100
                            </p>
                            <hr class="hr-lg my-2 w-20 mx-auto hr-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul class="nav navbar-nav float-lg-right navbar-nav-flush-right dropdown-effect-fadeup">
                  <li class="nav-item dropdown dropdowns-no-carets dropdown-persist">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      id="account-drop"
                      data-toggle="dropdown"
                      data-hover="dropdown"
                    >
                      <i class="fa fa-user mr-2" />
                      My Account
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                      {" "}
                      <a href="#" class="dropdown-item">
                        My Wish List
                      </a>{" "}
                      <a href="#" class="dropdown-item">
                        Order History
                      </a>{" "}
                      <a href="#" class="dropdown-item">
                        Track Orders
                      </a>{" "}
                    </div>
                  </li>
                  <li class="nav-item dropdown dropdowns-no-carets dropdown-persist">
                    {" "}
                    <a
                      href="#"
                      class="btn btn-primary btn-sm btn-rounded text-uppercase font-weight-bold px-3 ml-3"
                    >
                      On Sale
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
