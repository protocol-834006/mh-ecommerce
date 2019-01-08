import keyBy from 'lodash/keyBy';
import { GET_PRODUCTS_BY_ADDRESS_SUCCESS } from '../actions/actionTypes';

const initialState = {
  products: { }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_BY_ADDRESS_SUCCESS:
      return {
        ...state,
        products: keyBy(action.data, 'ProductQuantitesId')
      };

    default:
      return state;
  }
};
