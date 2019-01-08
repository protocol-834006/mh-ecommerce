
import commonApi from '../api/commonApi';
import {
  GET_PRODUCTS_BY_ADDRESS_PENDING, GET_PRODUCTS_BY_ADDRESS_SUCCESS,
  GET_PRODUCTS_BY_ADDRESS_FAILURE
} from './actionTypes';
import {
  GET_PRODUCTS_BYADDRESS_URL
} from '../api/apiEndPoints';


export const getProductsByAddress = data => (dispatch) => {
  dispatch({
    type: GET_PRODUCTS_BY_ADDRESS_PENDING,
    data: {}
  });
  commonApi(GET_PRODUCTS_BYADDRESS_URL, data)
    .then((response) => {
      dispatch({
        type: GET_PRODUCTS_BY_ADDRESS_SUCCESS,
        data: response.data
      });
    })
    .catch(error => dispatch({
      type: GET_PRODUCTS_BY_ADDRESS_FAILURE,
      data: { error }
    }));
};
