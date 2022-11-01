import createSagaMiddleware from "redux-saga";
import authenticationSlice from "./slices/authenticationSlice";
// import voucherSlice from "./slices/voucherSlice";
import rootSaga from "../redux/sagas/index";
import { configureStore } from "@reduxjs/toolkit";
// import raffleSlice from "./slices/raffleSlice";
// import userSlice from "./slices/userSlice";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    Authentication: authenticationSlice,
    // Voucher: voucherSlice,
    // Raffle: raffleSlice,
    // User: userSlice,
  },
  middleware: [saga],
});
saga.run(rootSaga);

export default store;
