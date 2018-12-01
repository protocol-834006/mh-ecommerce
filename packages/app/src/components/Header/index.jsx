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
                  <i class="fa fa-bars" />
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
                            <i class="fa fa-times" />
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
                      </a>
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
        </div>
      </div>
    );
  }
}

export default Header;
