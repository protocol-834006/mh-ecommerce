import mhAxios from './mhAxios';

export default (data) => {
  const url = 'http://www.qaapi.morninghopper.com/api/ValidateUser';
  return mhAxios(url, data, { UserId: 672, VendorId: 0, RoleId: 3 }).post()
    .then(response => response)
    .catch(error => console.log(error));
};
