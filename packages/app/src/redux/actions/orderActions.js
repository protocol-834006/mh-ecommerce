
import commonApi from '../api/commonApi';
import {
  GET_ORDER_SUMMARY_PENDING, GET_ORDER_SUMMARY_SUCCESS,
  GET_ORDER_SUMMARY_FAILURE, PLACE_ORDER_PENDING,
  PLACE_ORDER_SUCCESS, PLACE_ORDER_FAILURE,
  GET_USER_ORDERS_PENDING, GET_USER_ORDERS_SUCCESS,
  GET_USER_ORDERS_FAILURE
} from './actionTypes';
import {
  GET_ORDER_SUMMARY_URL, PLACE_ORDER_URL, GET_USER_ORDERS_URL
} from '../api/apiEndPoints';


export const getOrderSummary = data => (dispatch) => {
  dispatch({
    type: GET_ORDER_SUMMARY_PENDING,
    data: {}
  });
  commonApi(GET_ORDER_SUMMARY_URL, data)
    .then((response) => {
      dispatch({
        type: GET_ORDER_SUMMARY_SUCCESS,
        data: response.data
      });
    })
    .catch(error => dispatch({
      type: GET_ORDER_SUMMARY_FAILURE,
      data: { error }
    }));
};
export const placeOrder = data => (dispatch) => {
  dispatch({
    type: PLACE_ORDER_PENDING,
    data: {}
  });
  commonApi(PLACE_ORDER_URL, data)
    .then((response) => {
      dispatch({
        type: PLACE_ORDER_SUCCESS,
        data: response.data
      });
    })
    .catch(error => dispatch({
      type: PLACE_ORDER_FAILURE,
      data: { error }
    }));
};
export const getUserOrders = data => (dispatch) => {
  dispatch({
    type: GET_USER_ORDERS_PENDING,
    data: {}
  });
  commonApi(GET_USER_ORDERS_URL, data)
    .then((response) => {
      dispatch({
        type: GET_USER_ORDERS_SUCCESS,
        data: response.data.Results
      });
    })
    .catch(error => dispatch({
      type: GET_USER_ORDERS_FAILURE,
      data: { error }
    }));
};
