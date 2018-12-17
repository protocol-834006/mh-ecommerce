import React from 'react';
import PropTypes from 'prop-types';

const MegaMenu = ({ show }) => (
  <div
    className="dropdown-menu dropdown-menu-right"
    style={{ opacity: '1', display: show ? 'block' : 'none', visibility: show ? 'visible' : 'hidden' }}
  >
    <ul className="nav nav-pills nav-pills-border-bottom-inside flex-column flex-lg-row" role="tablist">
      <li className="nav-item">
        <a
          href="_blank"
          className="nav-link p-3 active text-center font-weight-bold text-uppercase"
          data-toggle="tab"
          data-target=".menu-tab-1"
          role="tab"
        >
          Mega Menu Tab 1
        </a>
      </li>
      <li className="nav-item">
        <a
          href="_blank"
          className="nav-link p-3 text-center font-weight-bold text-uppercase"
          data-toggle="tab"
          data-target=".menu-tab-2"
          role="tab"
        >
          Mega Menu Tab 2
        </a>
      </li>
    </ul>
    <div className="tab-content py-3">
      <div className="tab-pane active show menu-tab-1" role="tabpanel">
        <div className="row text-center">
          <div className="col-lg-4 py-2">
            <i className="fa fa-tachometer-alt icon-3x op-6" />
            <h5 className="mt-2">Fully Optimized</h5>
            <p className="text-sm mb-0">Aliquam aliquip aptent ea eum mauris qui uxor valde zelus.</p>
          </div>
          <div className="col-lg-4 py-2">
            <i className="fa fa-wrench icon-3x op-6" />
            <h5 className="mt-2">Free Support</h5>
            <p className="text-sm mb-0">Inhibeo jugis olim virtus zelus.</p>
          </div>
          <div className="col-lg-4 py-2">
            <i className="fa fa-rocket icon-3x op-6" />
            <h5 className="mt-2">Free Upgrades</h5>
            <p className="text-sm mb-0">Aliquip blandit cogo genitus ibidem nutus.</p>
          </div>
        </div>
      </div>
      <div className="tab-pane menu-tab-2" role="tabpanel">
        <div className="row text-center">
          <div className="col-lg-4 py-2">
            <i className="fa fa-chart-line icon-3x op-6" />
            <h5 className="mt-2">99.9% Uptime</h5>
            <p className="text-sm mb-0">Accumsan commoveo inhibeo iusto luptatum nunc refoveo.</p>
          </div>
          <div className="col-lg-4 py-2">
            <i className="fa fa-users icon-3x op-6" />
            <h5 className="mt-2">Multiuser</h5>
            <p className="text-sm mb-0">Consequat eum exputo hendrerit pala similis tamen tego.</p>
          </div>
          <div className="col-lg-4 py-2">
            <i className="fa fa-plug icon-3x op-6" />
            <h5 className="mt-2">Plug n play</h5>
            <p className="text-sm mb-0">Interdico jus nisl pagus.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

MegaMenu.propTypes = {
  show: PropTypes.bool
};

MegaMenu.defaultProps = {
  show: true
};

export default MegaMenu;
