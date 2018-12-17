import React, { Component } from 'react';
import { Carousel } from 'antd';
import './AntCarousel.css';

class AntCarouselSlider extends Component {
  render() {
    return (
      <Carousel autoplay>
        <div>
          <h3>Morning delivery</h3>
        </div>
        <div>
          <h3>Hassle Free Payments</h3>
        </div>
        <div>
          <h3>Stay Connected</h3>
        </div>
        <div>
          <h3>Standard Features For Vendors</h3>
        </div>
        <div>
          <h3>Customer Features</h3>
        </div>
        <div>
          <h3>Our Service</h3>
        </div>
        <div>
          <h3>What Our Clients Say</h3>
        </div>
      </Carousel>
    );
  }
}
export default AntCarouselSlider;
