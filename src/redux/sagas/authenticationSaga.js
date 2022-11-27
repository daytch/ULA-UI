import { all, call, put, takeEvery } from "redux-saga/effects";
import { URL } from "./../constants";

import { POST } from "./../middleware/index";
import {
  postLoginFailure,
  postLoginSuccess,
  postCaptchaSuccess,
  postCaptchaFailure,
} from "../slices/authenticationSlice";
import { history } from "../../helpers/history";

export function* postLogin(action) {
  try {
    const data = action.payload;
    const res = yield call(POST, URL.LOGIN, data);
    debugger;
    if (res) {
      yield put(
        postLoginFailure({
          isError: 1,
          message: res.ErrorMessage,
        })
      );
    } else {
      let d = {
        token: "xxxxxxxx",
        username: "daytch",
        email: "van.daytch@gmail.com",
      };
      yield put(postLoginSuccess({ data: d }));
      const { from } = history.location.state || { from: { pathname: "/" } };
      // history.navigate(from);
    }
  } catch (error) {
    yield put(postLoginFailure({ isError: 1, message: error }));
  }
}

export function* postCapcay(action) {
  try {
    const data = action.payload;
    const res = yield call(POST, URL.CAPTCHA, data);

    if (!res && res.ErrorCode > 0) {
      yield put(
        postCaptchaFailure({
          isError: 1,
          message: res.message ? res.message : res.statusText,
        })
      );
    } else {
      yield put(postCaptchaSuccess({ data: res.Data }));
    }
  } catch (error) {
    yield put(postCaptchaFailure({ isError: 1, message: error }));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery("Authentication/postLogin", postLogin),
    takeEvery("Authentication/postCaptcha", postCapcay),
  ]);
}
