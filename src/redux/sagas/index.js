import { all } from "redux-saga/effects";
import Authentication from "./authenticationSaga";
// import Voucher from "./voucherSaga";
// import Raffle from "./raffleSaga";
// import User from "./userSaga";

export default function* rootSaga() {
  yield all([Authentication()]); //, Voucher(), Raffle(), User()]);
}
