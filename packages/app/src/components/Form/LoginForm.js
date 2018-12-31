import React from 'react';
import { withFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
// import { Link } from 'react-router-dom';
import TextInput from '../TextInput';


const LoginForms = ({
  values, touched, errors, dirty, handleChange, handleBlur, handleSubmit
}) => (
  <main className="loggin-wrapper">
    <div className="user-action-form">
      <h3>Sign to Morning Hopper</h3>
      <p className="title">Sign In now, Lets start your Shopping.</p>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <li>
            <TextInput
              type="email"
              name="email"
              placeholder="Email Address*"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={dirty && touched.email && errors.email}
            />
          </li>
          <li>
            <TextInput
              type="password"
              name="password"
              placeholder="Password*"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={dirty && touched.password && errors.password}
            />
          </li>
          <div>
            <button type="submit" className="button2">Login</button>
          </div>
        </form>
        <div className="form-end row">
          <div className="col-md-6">
            <p className="info_text aln-left">
              Recover
              <a href="_blank">Password?</a>
            </p>
          </div>
          <div className="col-md-6">
            <p className="info_text aln-right">
              New to MH?
              <a href="_blank">Create Account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
);


const FormikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email is not valid')
      .required('Email is required'),
    password: Yup.string().required('Password is required')
  }),
  handleSubmit(payload, { resetForm, setSubmitting }) {
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
    resetForm();
  },
  displayName: 'BasicForm'
});

const FormikEnhancedForm = FormikEnhancer(LoginForms);

export default FormikEnhancedForm;

LoginForms.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object,
  errors: PropTypes.object,
  dirty: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

LoginForms.defaultProps = {
  touched: {},
  errors: {},
  dirty: false
};
