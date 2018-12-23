import React from 'react';
import {
  Formik,
  Form, Field,
  ErrorMessage
} from 'formik';
import { Link } from 'react-router-dom';

class SignUpForm extends React.PureComponent {
  handleSubmit(e) {
    console.log(e);
    this.setState(e);
  }

  render() {
    return (
      <div className="form">
        <h1>Sign up with Morning Hopper</h1>
        <Formik>
          {
            ({ isSubmitting }) => (
              <Form>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
                <div style={{ overflow: 'hidden', marginTop: '2rem' }}>
                  <span className="pull--left"><a href="_">Recover password</a></span>
                  <span className="pull--right"><Link to="/signup">New to MH? Create Account</Link></span>
                </div>
              </Form>
            )
          }

        </Formik>
      </div>
    );
  }
}

export default SignUpForm;
