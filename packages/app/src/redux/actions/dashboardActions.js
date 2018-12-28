import commonApi from '../api/commonApi';
import {
  GET_DASHBOARD_DETAILS_FAILURE, GET_DASHBOARD_DETAILS_PENDING, GET_DASHBOARD_DETAILS_SUCCESS
} from './actionTypes';
import {
  USER_DASHBOARD_API_URL
} from '../api/apiEndPoints';

export const getDashBoardDetails = data => (dispatch) => {
  dispatch({
    type: GET_DASHBOARD_DETAILS_PENDING,
    data: {}
  });
  commonApi(USER_DASHBOARD_API_URL, data)
    .then((response) => {
      dispatch({
        type: GET_DASHBOARD_DETAILS_SUCCESS,
        data: response.data
      });
    })
    .catch(error => dispatch({
      type: GET_DASHBOARD_DETAILS_FAILURE,
      data: { error }
    }));
};
