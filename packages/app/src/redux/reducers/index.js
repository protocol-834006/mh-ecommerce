import { combineReducers } from 'redux';
import loginReducer from './auth';
import dashBoardDetails from './dashboardDetails';
// function reducers(state = {}) {
//   return state;
// }

export default combineReducers({ usersInfo: loginReducer, dashBoardDetails });
