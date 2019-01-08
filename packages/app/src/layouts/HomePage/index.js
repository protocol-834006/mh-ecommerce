import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AdsContent from '../../components/AdsContent';
import Deals from '../../components/Deals/index';
import FeaturedItems from '../../components/FeaturedItems';
import YouMayLike from '../../components/YouMayLike';
import FooterWrapper from '../../components/FooterWrapper';
import {
  doLogin, printMessage, doSignUp, validateOtp
} from '../../redux/actions/authActions';
import {
  getDashBoardDetails
} from '../../redux/actions/dashboardActions';
import {
  getProductsByAddress
} from '../../redux/actions/productActions';
import {
  getOrderSummary, placeOrder, getUserOrders
} from '../../redux/actions/orderActions';

class HomePage extends React.Component {
  static propTypes = {
    doLoginFn: PropTypes.func.isRequired,
    printMessageFn: PropTypes.func.isRequired,
    doSignUpFn: PropTypes.func.isRequired,
    validateOtpFn: PropTypes.func.isRequired,
    getDashBoardDetailsFn: PropTypes.func.isRequired,
    getProductsByAddressFn: PropTypes.func.isRequired,
    getOrderSummaryFn: PropTypes.func.isRequired,
    placeOrderFn: PropTypes.func.isRequired,
    getPastOrdersFn: PropTypes.func.isRequired
  }

  componentDidMount() {
    const {
      doLoginFn, printMessageFn, doSignUpFn, validateOtpFn,
      getDashBoardDetailsFn, getProductsByAddressFn, getOrderSummaryFn, placeOrderFn, getPastOrdersFn
    } = this.props;

    doLoginFn();
    printMessageFn();
    doSignUpFn();
    validateOtpFn();
    getDashBoardDetailsFn();
    getProductsByAddressFn();
    getOrderSummaryFn();
    placeOrderFn();
    getPastOrdersFn();
  }

  render() {
    return (
      <div className="content-wrapper">
        <AdsContent />
        <Deals />
        <FeaturedItems />
        <YouMayLike />
        <FooterWrapper />
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
const getProductQuantitiesByAddressReqObj = {
  PageIndex: 0,
  PageSize: 50,
  CategoryId: 6,
  DeliveryAddressLatitude: '17.4956895',
  DeliveryAddressLongtitude: '78.3982776'
};
const getOrderSummaryObj = {
  ProductQuantityIdAndQuantities: '72@10',
  DeliveryAddress: 'dhgjsgf dgfhjgsdfdsgfhg ksdgfsgd fksjdgfksdgf ss dfjkhdsg fjksgfkjsgfs fksdgfksgfksgfs',
  NearestLandMark: '',
  AddressLine1: '',
  DeliveryAddressLatitude: '12121',
  DeliveryAddressLongtitude: '1122',
  DeviceUUID: '00000000-1111-2222-33450015'
};
const placeOrderObj = {
  ProductQuantityIdAndQuantities: '72@10',
  DeliveryAddress: 'ccccs',
  NearestLandMark: '',
  AddressLine1: '',
  DeliveryAddressLatitude: '12121',
  DeliveryAddressLongtitude: '1122',
  DeviceUUID: '00000000-1111-2222-33450015'
};
const userOrdersObj = {
  UserId: 672,
  StartDate: '2018-01-01T12:00:00.000Z',
  EndDate: '2018-12-31T12:00:00.000Z',
  PageSize: 10000,
  PageIndex: 1
};
const mapDispatchToProps = () => dispatch => ({
  doLoginFn: () => dispatch(doLogin({ UserName: '9949121113', Password: '123456' })),
  printMessageFn: () => dispatch(printMessage()),
  doSignUpFn: () => dispatch(doSignUp(signUpRequest)),
  validateOtpFn: () => dispatch(validateOtp(123456, signUpRequest)),
  getDashBoardDetailsFn: () => dispatch(getDashBoardDetails(dashBoardDetailsRequest)),
  getProductsByAddressFn: () => dispatch(getProductsByAddress(getProductQuantitiesByAddressReqObj)),
  getOrderSummaryFn: () => dispatch(getOrderSummary(getOrderSummaryObj)),
  placeOrderFn: () => dispatch(placeOrder(placeOrderObj)),
  getPastOrdersFn: () => dispatch(getUserOrders(userOrdersObj))
});
export default connect(null, mapDispatchToProps)(HomePage);
