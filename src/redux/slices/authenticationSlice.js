import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
  name: "Authentication",
  initialState: {
    data: {},
    loading: false,
    error: "",
    message: "",
    token: "",
  },
  reducers: {
    postCaptcha: (state) => {
      state.loading = true;
    },
    postCaptchaSuccess: (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    },
    postCaptchaFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    postLogin: (state) => {
      state.loading = true;
    },
    postLoginSuccess: (state, action) => {
      state.data = action.payload.data;
      state.token = action.payload.data.token;
      state.loading = false;
    },
    postLoginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const {
  postLogin,
  postLoginSuccess,
  postLoginFailure,
  postCaptcha,
  postCaptchaFailure,
  postCaptchaSuccess,
} = authenticationSlice.actions;

export default authenticationSlice.reducer;
