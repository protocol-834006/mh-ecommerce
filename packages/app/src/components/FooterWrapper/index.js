import React from 'react';

import FooterContent from './FooterContent';
import FooterTop from './FooterTop';
import FooterGrid from './FooterGrid';
import FooterInfo from './FooterInfo';
import FooterMoreInfo from './FooterMoreInfo';
import FooterCopyWrite from './FooterCopyRight';


const FooterWrapper = () => (
  <footer className="footer-section">
    <FooterTop />
    <section>
      <div className="container">
        <FooterContent />
        <FooterGrid />
        <FooterInfo />
        <FooterMoreInfo />
      </div>
      <FooterCopyWrite />
    </section>
  </footer>
);

export default FooterWrapper;
