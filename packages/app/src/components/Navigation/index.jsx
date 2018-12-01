import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <div class="navbar navbar-expand-md">
        <div class="navbar-main collapse bg-grey-dark navbar-dark">
          <div class="container clearfix">
            <ul class="nav navbar-nav float-lg-left navbar-nav-flush dropdown-effect-fadeup">
              <li class="nav-item">
                <a href="shop.html" class="nav-link">
                  Shop Home
                </a>
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
                  <a href="shop-grid.html" class="dropdown-item">
                    Products Grid
                  </a>
                  <a href="shop-list.html" class="dropdown-item">
                    Products List
                  </a>
                  <a href="shop-product.html" class="dropdown-item">
                    Product View
                  </a>
                  <a href="shop-cart.html" class="dropdown-item">
                    Cart
                  </a>
                  <a href="shop-checkout.html" class="dropdown-item">
                    Checkout
                  </a>
                  <a href="shop-confirmation.html" class="dropdown-item">
                    Confirmation
                  </a>
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
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Shoes
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Shirts
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Trousers
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Suits
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Jackets
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Sportswear
                          </a>{" "}
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Shorts
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Swimwear
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            T-shirts
                          </a>
                        </div>
                        <div class="col-lg-3 dropdown-icons-default">
                          <h3 class="dropdown-header mb-0">Womens</h3>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Dresses
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Jeans
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Skirts
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Suits
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Jackets
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Sportswear
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Shorts
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Swimwear
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            T-shirts
                          </a>
                        </div>
                        <div class="col-lg-3">
                          <h3 class="dropdown-header mb-0">Childrens</h3>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Shoes
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Sports Wear
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            School Clothes
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Trousers
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Suits
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Jackets
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Sportswear
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Swimwear
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            T-shirts
                          </a>
                        </div>
                        <div class="col-lg-3 dropdown-icons-default">
                          <h3 class="dropdown-header mb-0">Baby</h3>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Newborn
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Toddler
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Preschool
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Winter Suits
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Jackets
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Sportswear
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Swimwear
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            T-shirts
                          </a>
                          <a href=".html" class="dropdown-item" tabindex="-1">
                            Trousers
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 d-none d-lg-block">
                      <h3 class="dropdown-header">
                        New Arrivals
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
                        <p class="text-white mb-0">On all orders over $100</p>
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
                  <a href="#" class="dropdown-item">
                    Home
                  </a>
                  <a href="#" class="dropdown-item">
                    Place Order
                  </a>
                  <a href="#" class="dropdown-item">
                    Past Orders
                  </a>
                  <a href="#" class="dropdown-item">
                    Profile
                  </a>
                  <a href="#" class="dropdown-item">
                    Change Password
                  </a>
                  <a href="#" class="dropdown-item">
                    Contact Us
                  </a>
                  <a href="#" class="dropdown-item">
                    Sign Out
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown dropdowns-no-carets dropdown-persist">
                <a
                  href="#"
                  class="btn btn-primary btn-sm btn-rounded text-uppercase font-weight-bold px-3 ml-3"
                >
                  On Sale
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
