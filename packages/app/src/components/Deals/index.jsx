import React from 'react';

import ItemDisplay from '../ItemDisplay';
import { dealsofTheDayData } from './constants';


const Deals = () => (
  <section className="deals-section container">
    <div className="row">
      <div className="col-md-9">
        <div className="main_tittle">
          <h3>
          Deals of the day
          </h3>
          <a href="#home">
          View all
          </a>
        </div>
        <div className="wrapper">
          { dealsofTheDayData.map(item => <ItemDisplay item={item} />)}
        </div>
      </div>
      <div className="col-md-3">
        <div className="promo_Ads"><div /></div>
      </div>
    </div>
  </section>
);

export default Deals;
