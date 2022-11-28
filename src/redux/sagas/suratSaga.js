import { all, call, put, takeEvery } from "redux-saga/effects";
import { URL } from "./../constants";

import { POST } from "./../middleware/index";
import {
  postSubmitSuratFailure,
  postSubmitSuratSuccess,
} from "../slices/suratSlice";
import { history } from "../../helpers/history";

export function* postSubmitSurat(action) {
  try {
    const data = action.payload;
    const res = yield call(POST, URL.POST_MAIL, data);
    
    if (res.message.toLowerCase().indexOf("success") === -1) {
      yield put(
        postSubmitSuratFailure({
          isError: 1,
          message: res.ErrorMessage,
        })
      );
    } else {
      yield put(postSubmitSuratSuccess({ res }));
    }
  } catch (error) {
    yield put(postSubmitSuratFailure({ isError: 1, message: error }));
  }
}

export default function* rootSaga() {
  yield all([takeEvery("Surat/postSubmitSurat", postSubmitSurat)]);
}
