/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  render() {
    const { modelClose } = this.props;
    return (
      <div className="modal-content">
        <form>
          <div className="modal-header bg-light">
            <h4 className="modal-title">Login</h4>
            <button type="button" className="close" aria-hidden="true" onClick={modelClose}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="login-email" className="sr-only">
                Email
                <input type="email" id="login-email" className="form-control email" placeholder="Email" />
              </label>
            </div>
            <div className="form-group mb-0">
              <label htmlFor="login-password" className="sr-only">
                Password
                <input
                  type="password"
                  id="login-password"
                  className="form-control password mb-1"
                  placeholder="Password"
                />
              </label>
            </div>
          </div>
          <div className="modal-footer bg-light py-3">
            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-primary">
                Login
              </button>
              <button type="button" className="btn btn-link ml-1" data-dismiss="modal" aria-hidden="true">
                Cancel
              </button>
            </div>
            <p className="text-xs text-right text-lh-tight op-8 my-0 ml-auto">
              Not a member?
              <a href="_blank" className="signup">
                Sign up now!
              </a>
              <br />
              <a href="_blank">Forgotten password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  /** @type {Function} modelClose */
  modelClose: PropTypes.func.isRequired
};

export default LoginForm;
// /* eslint-disable */
// import React from 'react';
// import { Formik, Field } from 'formik';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

// /**
//  * Login screen
//  */
// const LandingPage = () => (
//   <React.Fragment>
//     <section className="hero is-success is-fullheight">
//       <div className="hero-body">
//         <div className="container has-text-centered">
//           <div className="column is-4 is-offset-4">
//             <h3 className="title has-text-grey">Login</h3>
//             <p className="subtitle has-text-grey">Please login to proceed.</p>
//             <div className="box">
//               <figure className="avatar">
//                 <img src="https://placehold.it/128x128" alt="" />
//               </figure>
//               <Formik
//                 initialValues={{
//                   email: '',
//                   password: ''
//                 }}
//                 onSubmit={(values, actions) => {
//                   setTimeout(() => {
//                     alert(JSON.stringify(values, null, 2));
//                     actions.setSubmitting(false);
//                   });
//                 }}
//                 render={(props) => (
//                   <form onSubmit={props.handleSubmit}>
//                     <div className="field">
//                       <div className="control">
//                         <Field
//                           name="email"
//                           className="input is-large"
//                           type="text"
//                           placeholder="Your Email"
//                           autofocus=""
//                         />
//                       </div>
//                     </div>
//                     <div className="field">
//                       <div className="control">
//                         <Field name
// ="password" className="input is-large" type="password" placeholder="Your Password" />
//                       </div>
//                     </div>
//                     <div className="field">
//                       <label htmlFor="remember" className="checkbox">
//                         <input name="remember" type="checkbox" />
//                         Remember me
//                       </label>
//                     </div>
//                     <button type="submit" className="button is-block is-info is-large is-fullwidth">
//                       Login
//                     </button>
//                   </form>
//                 )}
//               />
//             </div>
//             <p className="has-text-grey">
//               <Link href="/signup" to="/signup">
//                 Sign Up
//               </Link>
//               &nbsp;·&nbsp;
//               <a href="../">Forgot Password</a>
//               &nbsp;·&nbsp;
//               <a href="../">Need Help?</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   </React.Fragment>
// );

// LandingPage.propTypes = {
//   /** @type {Function} */
//   handleSubmit: PropTypes.func.isRequired
// };

// export default LandingPage;
