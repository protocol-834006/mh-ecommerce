import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AdsContent from '../../components/AdsContent';
import {
  doLogin, printMessage, doSignUp, validateOtp
} from '../../redux/actions/authActions';
import {
  getDashBoardDetails
} from '../../redux/actions/dashboardActions';

class HomePage extends React.Component {
  static propTypes = {
    doLoginFn: PropTypes.func.isRequired,
    printMessageFn: PropTypes.func.isRequired,
    doSignUpFn: PropTypes.func.isRequired,
    validateOtpFn: PropTypes.func.isRequired,
    getDashBoardDetailsFn: PropTypes.func.isRequired
  }

  componentDidMount() {
    const {
      doLoginFn, printMessageFn, doSignUpFn, validateOtpFn, getDashBoardDetailsFn
    } = this.props;

    doLoginFn();
    printMessageFn();
    doSignUpFn();
    validateOtpFn();
    getDashBoardDetailsFn();
  }

  render() {
    return (
      <div className="content-wrapper">
        <AdsContent />
      </div>);
  }
}
const signUpRequest = {
  UsersInfoId: 0,
  CreatedBy: 0,
  CreatedDate: null,
  DefaultOrders: [],
  Mobile: '4444111131',
  ModifiedBy: 0,
  ModifiedDate: null,
  Name: 'venkat',
  Password: '123456',
  ProfilePicPath: null,
  RoleId: 3,
  RoleName: null,
  Status: 0,
  UserName: '4444111131',
  UserUniqueId: null,
  UserVendorMappings: null,
  VendorId: 0,
  Email: '',
  DeviceUUID: null
};
const dashBoardDetailsRequest = {
  PageIndex: '0', PageSize: 20, CategoryId: null, DeliveryAddressLatitude: null, DeliveryAddressLongtitude: null
};
const mapDispatchToProps = () => dispatch => ({
  doLoginFn: () => dispatch(doLogin({ UserName: '9949121113', Password: '123456' })),
  printMessageFn: () => dispatch(printMessage()),
  doSignUpFn: () => dispatch(doSignUp(signUpRequest)),
  validateOtpFn: () => dispatch(validateOtp(123456, signUpRequest)),
  getDashBoardDetailsFn: () => dispatch(getDashBoardDetails(dashBoardDetailsRequest))
});
export default connect(null, mapDispatchToProps)(HomePage);
