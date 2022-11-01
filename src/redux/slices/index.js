import { combineReducers } from "redux";
import authenticationReducer from "./authenticationSlice";
// import voucherReducer from "./voucherSlice";
// import userReducer from "./userSlice";

const appReducer = combineReducers({
  authenticationReducer,
  // voucherReducer,
  // userReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
