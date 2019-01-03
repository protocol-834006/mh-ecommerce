import React from 'react';

const image1 = require('../../../images/pay1.png');
const image2 = require('../../../images/pay2.png');
const image3 = require('../../../images/pay3.png');
const image4 = require('../../../images/pay4.png');
const image5 = require('../../../images/pay5.png');
const image6 = require('../../../images/pay6.png');
const image7 = require('../../../images/pay7.png');
const image8 = require('../../../images/pay8.png');
const image9 = require('../../../images/pay9.png');
const appLogo1 = require('../../../images/1.png');
const appLogo2 = require('../../../images/2.png');


const FooterMoreInfo = () => (
  <div className="footer-more-info">
    <div>
      <div className="sub-some">
        <h5>Online Morning Hopper Shopping</h5>
        <p>
Order online.
All your favourite products from the low price online shopping for grocery home
delivery in hydrabad,Bengaluru, khammam and other cities in India. Lowest prices guaranteed on
Patanjali,Aashirvaad, Pampers, Maggi, Saffola, Huggies, Fortune, Nestle, Amul, MamyPoko Pants,Surf Excel,
 Ariel, Vim, Haldiram s and others.
        </p>
      </div>
      <div className="sub-some">
        <h5>Shop online with the best deals &amp; offers</h5>
        <p>
Now Get Upto 40% Off On Everyday Essential Products Shown On The Offer Page.
The range includes Grocery, Personal Care,
Baby Care, Pet Supplies, Healthcare and Other Daily Need Products. Discount May Vary From Product To Product.
        </p>
      </div>
      <div className="sub-some">
        <h5>Popular Brands</h5>
        <ul>
          <li>
            <a href="#index">Aashirvaad</a>
          </li>
          <li>
            <a href="#index">Amul</a>
          </li>
          <li>
            <a href="#index">Bingo</a>
          </li>
          <li>
            <a href="#index">Boost</a>
          </li>
          <li>
            <a href="#index">Durex</a>
          </li>
          <li>
            <a href="#index"> Maggi</a>
          </li>
          <li>
            <a href="#index">Glucon-D</a>
          </li>
          <li>
            <a href="#index">Horlicks</a>
          </li>
          <li>
            <a href="product2.html">Head &amp; Shoulders</a>
          </li>
          <li>
            <a href="product2.html">Dove</a>
          </li>
          <li>
            <a href="product2.html">Dettol</a>
          </li>
          <li>
            <a href="product2.html">Dabur</a>
          </li>
          <li>
            <a href="product2.html">Colgate</a>
          </li>
          <li>
            <a href="#index">Coca-Cola</a>
          </li>
          <li>
            <a href="product2.html">Closeup</a>
          </li>
          <li>
            <a href="product2.html"> Cinthol</a>
          </li>
          <li>
            <a href="#index">Cadbury</a>
          </li>
          <li>
            <a href="#index">Bru</a>
          </li>
          <li>
            <a href="#index">Bournvita</a>
          </li>
          <li>
            <a href="#index">Tang</a>
          </li>
          <li>
            <a href="#index">Pears</a>
          </li>
          <li>
            <a href="#index">Oreo</a>
          </li>
          <li>
            <a href="#index"> Taj Mahal</a>
          </li>
          <li>
            <a href="#index">Sprite</a>
          </li>
          <li>
            <a href="#index">Thums Up</a>
          </li>
          <li>
            <a href="product2.html">Fair &amp; Lovely</a>
          </li>
          <li>
            <a href="product2.html">Lakme</a>
          </li>
          <li>
            <a href="#index">Tata</a>
          </li>
          <li>
            <a href="product2.html">Sunfeast</a>
          </li>
          <li>
            <a href="product2.html">Sunsilk</a>
          </li>
          <li>
            <a href="#index">Patanjali</a>
          </li>
          <li>
            <a href="#index">MTR</a>
          </li>
          <li>
            <a href="#index">Kissan</a>
          </li>
          <li>
            <a href="product2.html"> Lipton</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="sub-payment row">
      <div className="col-xs-8">
        <div className="sub-some child-momu">
          <h5>Payment Method</h5>
          <ul>
            <li>
              <img src={image1} alt="" />
            </li>
            <li>
              <img src={image5} alt="" />
            </li>
            <li>
              <img src={image3} alt="" />
            </li>
            <li>
              <img src={image8} alt="" />
            </li>
            <li>
              <img src={image6} alt="" />
            </li>
            <li>
              <img src={image2} alt="" />
            </li>
            <li>
              <img src={image7} alt="" />
            </li>
            <li>
              <img src={image4} alt="" />
            </li>
            <li>
              <img src={image9} alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="sub-some col-xs-4">
        <h5>Download the App</h5>
        <ul className="app_logos">
          <li>
            <img src={appLogo1} alt="" />
          </li>
          <li>
            <img src={appLogo2} alt="" />
          </li>
          <li />
        </ul>
      </div>
    </div>
  </div>
);

export default FooterMoreInfo;
