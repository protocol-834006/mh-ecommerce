import React from 'react';

import ItemDisplay from '../ItemDisplay';
import { productsInfo } from './constants';


const YouMayLike = () => (
  <section className="all_brands_section">
    <div className="container">
      <div className="main_tittle">
        <h3>You May Like</h3>
        <a href="#index">View all</a>
      </div>
      <div className="product_wrapper">
        {productsInfo.map(item => <ItemDisplay item={item} />)}
      </div>
    </div>
  </section>
);


export default YouMayLike;
