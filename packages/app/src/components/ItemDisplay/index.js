import React from 'react';
import PropTypes from 'prop-types';


const ItemDisplay = ({ item }) => (
  <React.Fragment>
    <div className="_product_item">
      <div className="thumb-item">
        <img src={item.imgLink} alt="" />
      </div>

      <div className="item-info-product">
        <div>
          <h4>
            {item.name}
            ,
            {'  '}
            {item.weight}
          </h4>
        </div>
        <div className="info-product-price">
          <span className="item_price">{item.currentPrice}</span>
          {' '}
          <del>{item.delPrice}</del>
        </div>
      </div>
      <div className="snipcart-details">
        <input type="submit" name="submit" value="Add to cart" className="button" />
      </div>
    </div>
  </React.Fragment>
);

ItemDisplay.propTypes = {
  item: PropTypes.array.isRequired
};

export default ItemDisplay;
