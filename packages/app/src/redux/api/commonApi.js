import mhAxios from './mhAxios';

export default (url, data) => mhAxios(url, data, { UserId: 672, VendorId: 0, RoleId: 3 }).post()
  .then(response => response)
  .catch(error => error);
