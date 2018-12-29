import { GET_DASHBOARD_DETAILS_SUCCESS } from '../actions/actionTypes';

const initialState = {
  customerDashboardDetails: { }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD_DETAILS_SUCCESS:
      return {
        ...state,
        customerDashboardDetails: action.data
      };

    default:
      return state;
  }
};
