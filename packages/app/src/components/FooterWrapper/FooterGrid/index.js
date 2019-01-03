import React from 'react';

const FooterGrid = () => (
  <div className="footer-grid">
    <div className="row">
      <div className="col-xs-4">
        <div className="grid_item">
          <div className="icon-fot">
            <span className="fa fa-map-marker" aria-hidden="true" />
          </div>
          <div className="text-form-footer">
            <h3>Track Your Order</h3>
          </div>
        </div>
      </div>
      <div className="col-xs-4">
        <div className="grid_item">
          <div className="icon-fot">
            <span className="fa fa-refresh" aria-hidden="true" />
          </div>
          <div className="text-form-footer">
            <h3>Free & Easy Returns</h3>
          </div>
        </div>
      </div>
      <div className="col-xs-4">
        <div className="grid_item">
          <div className="icon-fot">
            <span className="fa fa-times" aria-hidden="true" />
          </div>
          <div className="text-form-footer">
            <h3>Online cancellation</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FooterGrid;
