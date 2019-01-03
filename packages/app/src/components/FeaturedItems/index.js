import React from 'react';

const link1 = require('../../images/future1.jpg');
const link2 = require('../../images/future2.jpg');
const link3 = require('../../images/future3.jpg');
const link4 = require('../../images/future3.jpg');


const FeaturedItems = () => (
  <section className="future-section">
    <div className="container">
      <div className="main_tittle">
        <h3>
          Featured Brands
        </h3>
        <a href="#index">
        View all
        </a>
      </div>

      <div className="row">
        <div className="future_wrapper col-12">
          <div>
            <img src={link1} alt="" />
          </div>
          <div>
            <img src={link2} alt="" />
          </div>
          <div>
            <img src={link3} alt="" />
          </div>
          <div>
            <img src={link4} alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedItems;
