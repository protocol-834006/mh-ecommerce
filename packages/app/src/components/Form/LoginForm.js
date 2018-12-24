import React from 'react';
import { withFormik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import TextInput from '../TextInput';


const LoginForms = ({
  values, touched, errors, dirty, handleChange, handleBlur, handleSubmit
}) => (
  <div className="form">
    <h1>Login to MorningHoppe</h1>
    <form onSubmit={handleSubmit}>
      <TextInput
        type="email"
        name="email"
        placeholder="Email Address*"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={dirty && touched.email && errors.email}
      />
      <TextInput
        type="password"
        name="password"
        placeholder="Password*"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={dirty && touched.password && errors.password}
      />
      <button type="submit">Login</button>
      <div style={{ overflow: 'hidden', marginTop: '2rem' }}>
        <span className="pull--left"><a href="_">Recover password</a></span>
        <span className="pull--right"><Link to="/signup">New to MH? Create Account</Link></span>
      </div>
    </form>
  </div>
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
      console.log('login up with', payload);
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
