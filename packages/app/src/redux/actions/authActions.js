
import commonApi from '../api/commonApi';
import {
  LOGIN_SUCCESS, LOGIN_PENDING, LOGIN_FAILURE,
  SIGNUP_SUCCESS, SIGNUP_PENDING, SIGNUP_FAILURE,
  OTP_PENDING, OTP_SUCCESS, OTP_FAILURE
} from './actionTypes';
import {
  VALIDATE_USER_API_URL, SIGNUP_USER_API_URL,
  VALIDATE_OTP_API_URL
} from '../api/apiEndPoints';

export const doLogin = data => (dispatch) => {
  dispatch({
    type: LOGIN_PENDING,
    data: {}
  });
  commonApi(VALIDATE_USER_API_URL, data)
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        data: response.data
      });
    })
    .catch(error => dispatch({
      type: LOGIN_FAILURE,
      data: { error }
    }));
};
export const printMessage = () => (dispatch) => {
  dispatch({
    type: 'TEST_MESSAGE',
    data: 'test message'
  });
};
export const doSignUp = data => (dispatch) => {
  dispatch({
    type: SIGNUP_PENDING,
    data: {}
  });
  commonApi(SIGNUP_USER_API_URL, data)
    .then((response) => {
      dispatch({
        type: SIGNUP_SUCCESS,
        data: response.data
      });
    })
    .catch(error => dispatch({
      type: SIGNUP_FAILURE,
      data: { error }
    }));
};
export const validateOtp = (otp, data) => (dispatch) => {
  const validateApiUrl = `${VALIDATE_OTP_API_URL}/${otp}`;
  dispatch({
    type: OTP_PENDING,
    data: {}
  });
  commonApi(validateApiUrl, data)
    .then((response) => {
      dispatch({
        type: OTP_SUCCESS,
        data: response.data
      });
    })
    .catch(error => dispatch({
      type: OTP_FAILURE,
      data: { error }
    }));
};
