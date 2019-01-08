import keyBy from 'lodash/keyBy';
import { GET_ORDER_SUMMARY_SUCCESS, PLACE_ORDER_SUCCESS, GET_USER_ORDERS_SUCCESS } from '../actions/actionTypes';

const initialState = {
  orderSummary: { },
  placedOrderDetails: {},
  pastOrders: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_SUMMARY_SUCCESS:
      return {
        ...state,
        orderSummary: action.data
      };
    case PLACE_ORDER_SUCCESS:
      return {
        ...state,
        placedOrderDetails: action.data
      };
    case GET_USER_ORDERS_SUCCESS:
      return {
        ...state,
        pastOrders: keyBy(action.data, 'OrderId')
      };

    default:
      return state;
  }
};
