import { createSlice } from "@reduxjs/toolkit";

export const suratSlice = createSlice({
  name: "Surat",
  initialState: {
    data: {},
    loading: false,
    error: "",
    message: "",
    token: "",
  },
  reducers: {
    postSubmitSurat: (state) => {
      state.loading = true;
    },
    postSubmitSuratSuccess: (state, action) => {
      state.data = action.payload.data;
      state.message = action.payload.message;
      state.loading = false;
    },
    postSubmitSuratFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const {
  postSubmitSurat,
  postSubmitSuratFailure,
  postSubmitSuratSuccess,
} = suratSlice.actions;

export default suratSlice.reducer;
