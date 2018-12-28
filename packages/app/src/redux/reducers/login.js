import { LOGIN_SUCCESS } from '../actions/actionTypes';

const initialState = {
  userinfo: { }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userinfo: action.data
      };
    default:
      return state;
  }
};
