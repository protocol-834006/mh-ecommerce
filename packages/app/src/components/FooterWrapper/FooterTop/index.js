import React from 'react';

const FooterTop = () => (
  <section className="footer-top">
    <div className="container-fluid">
      <div className="col-xs-8 subscribe-email">
        <h2>Get your products delivered from local stores</h2>
        <p>Free Delivery on your first order!</p>
        <form action="#" method="post">
          <input type="email" placeholder="E-mail" name="email" required="" />
          <input type="submit" value="Subscribe" />
        </form>
      </div>
      <div className="col-xs-4 clip_image_section">
        <img src="images/shoping.png" alt="" />
      </div>
    </div>
  </section>
);

export default FooterTop;
