
import loginApi from '../api/loginApi';
import { LOGIN_SUCCESS, LOGIN_PENDING } from './actionTypes';


export const doLogin = data => (dispatch) => {
  dispatch({
    type: LOGIN_PENDING,
    data: {}
  });
  loginApi(data)
    .then((response) => {
      console.log(response);
      dispatch({
        type: LOGIN_SUCCESS,
        data: response.data
      });
    })
    .catch(error => console.log(error));
};
