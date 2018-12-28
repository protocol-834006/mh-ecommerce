import { LOGIN_SUCCESS, SIGNUP_SUCCESS, OTP_SUCCESS } from '../actions/actionTypes';

const initialState = {
  userinfo: { },
  testmessage: '',
  userLoggedIn: false,
  otpValidated: { }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userinfo: action.data
      };
    case 'TEST_MESSAGE':
      return {
        ...state,
        testmessage: action.data
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        userLoggedIn: action.data ? !action.data.isError : false
      };
    case OTP_SUCCESS:
      return {
        ...state,
        otpValidated: action.data
      };
    default:
      return state;
  }
};
