import axios from 'axios';

export default function mhAxios(url, data, user) {
  function get() {
    return axios({
      method: 'get',
      url,
      responseType: 'json',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json',
        dataType: 'json',
        UserId: user.userId,
        VendorId: user.vendorId,
        RoleId: user.roleId,
        UserKey: user.userKey
      }
    });
  }

  function post() {
    return axios({
      method: 'post',
      url,
      data,
      responseType: 'json',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json',
        dataType: 'json',
        UserId: user.UserId,
        VendorId: user.VendorId,
        RoleId: user.RoleId,
        UserKey: user.userKey
      }
    });
  }
  return {
    get,
    post
  };
}
