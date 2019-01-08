import { combineReducers } from 'redux';
import loginReducer from './auth';
import dashBoardDetails from './dashboardDetails';
import products from './products';
import orders from './orders';
// function reducers(state = {}) {
//   return state;
// }

export default combineReducers({
  usersInfo: loginReducer, dashBoardDetails, products, orders
});
