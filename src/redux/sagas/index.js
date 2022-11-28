import { all } from "redux-saga/effects";
import Authentication from "./authenticationSaga";
import Surat from "./suratSaga";

export default function* rootSaga() {
  yield all([Authentication(), Surat()]); //, Voucher(), Raffle(), User()]);
}
