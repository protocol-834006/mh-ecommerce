import React from 'react';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';

/**
 * Login screen
 */
const LandingPage = () => (
  <React.Fragment>
    <section className="hero is-success is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-grey">Login</h3>
            <p className="subtitle has-text-grey">Please login to proceed.</p>
            <div className="box">
              <figure className="avatar">
                <img src="https://placehold.it/128x128" alt="" />
              </figure>
              <Formik
                initialValues={{
                  email: '',
                  password: ''
                }}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                  });
                }}
                render={props => (
                  <form onSubmit={props.handleSubmit}>
                    <div className="field">
                      <div className="control">
                        <Field
                          name="email"
                          className="input is-large"
                          type="text"
                          placeholder="Your Email"
                          autofocus=""
                        />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <Field name="password" className="input is-large" type="password" placeholder="Your Password" />
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="remember" className="checkbox">
                        <input name="remember" type="checkbox" />
                        Remember me
                      </label>
                    </div>
                    <button type="submit" className="button is-block is-info is-large is-fullwidth">
                      Login
                    </button>
                  </form>
                )}
              />
            </div>
            <p className="has-text-grey">
              <a href="../">Sign Up</a>
              &nbsp;·&nbsp;
              <a href="../">Forgot Password</a>
              &nbsp;·&nbsp;
              <a href="../">Need Help?</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

LandingPage.propTypes = {
  /** @type {Function} */
  handleSubmit: PropTypes.func.isRequired
};

export default LandingPage;
