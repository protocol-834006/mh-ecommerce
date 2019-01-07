import React from 'react';
import { withFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import TextInput from '../TextInput';

const SignUpForms = ({
  values,
  touched,
  errors,
  dirty,
  handleChange,
  handleBlur,
  handleSubmit
}) => (
  <main className="loggin-wrapper">
    <div className="user-action-form">
      <h3>Signup with the Morning Hopper</h3>
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
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={dirty && touched.password && errors.password}
            />
          </li>
          <li>
            <TextInput
              type="tel"
              name="contact"
              placeholder="Mobile Number"
              value={values.contact}
              onChange={handleChange}
              onBlur={handleBlur}
              error={dirty && touched.contact && errors.contact}
            />
          </li>
          <div>
            <label htmlFor="male">
              <input type="radio" name="gender" id="male" />
          I am a male
            </label>

            <label htmlFor="female">
              <input type="radio" name="gender" id="male" />
          I am a female
            </label>
          </div>

          <button type="submit">Register</button>

          <div style={{ overflow: 'hidden', marginTop: '2rem' }}>
            <span className="pull--left">
              <a href="_">Recover password</a>
            </span>

            <span className="pull--right">
              <Link to="/signup">New to MH? Create Account</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  </main>
);

const FormikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email is not valid')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
    contact: Yup.number()
      .min(10, 'Contact Number should be of 10 characters')
      .positive()
      .required('Contact Number is required')
  }),
  handleSubmit(payload, { resetForm, setSubmitting }) {
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
    resetForm();
  }
});

const FormikEnhancedSignUpFormForm = FormikEnhancer(SignUpForms);

export default FormikEnhancedSignUpFormForm;

SignUpForms.propTypes = {
  values: PropTypes.object.isRequired,
  touched: PropTypes.object,
  errors: PropTypes.object,
  dirty: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

SignUpForms.defaultProps = {
  touched: {},
  errors: {},
  dirty: false
};
