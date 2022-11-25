import { combineReducers } from "redux";
import authenticationReducer from "./authenticationSlice";
import dashboardReducer from "./";

const appReducer = combineReducers({
  authenticationReducer,
  dashboardReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
