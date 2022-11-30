import { createSlice } from "@reduxjs/toolkit";

export const suratSlice = createSlice({
  name: "Surat",
  initialState: {
    data: {},
    inbox: [],
    outbox: [],
    tracking: [],
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

    postActionSurat: (state) => {
      state.loading = true;
    },
    postActionSuratSuccess: (state, action) => {
      state.data = action.payload.data;
      state.message = action.payload.message;
      state.loading = false;
    },
    postActionSuratFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    getTracking: (state) => {
      state.loading = true;
    },
    getTrackingSuccess: (state, action) => {
      state.tracking = action.payload.res;
      state.message = action.payload.message;
      state.loading = false;
    },
    getTrackingFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    getInbox: (state) => {
      state.loading = true;
    },
    getInboxSuccess: (state, action) => {
      state.inbox = action.payload.res;
      state.message = action.payload.message;
      state.loading = false;
    },
    getInboxFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    getOutbox: (state) => {
      state.loading = true;
    },
    getOutboxSuccess: (state, action) => {
      state.outbox = action.payload.res;
      state.message = action.payload.message;
      state.loading = false;
    },
    getOutboxFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const {
  postSubmitSurat,
  postSubmitSuratFailure,
  postSubmitSuratSuccess,
  postActionSurat,
  postActionSuratFailure,
  postActionSuratSuccess,
  getInbox,
  getInboxSuccess,
  getInboxFailure,
  getOutbox,
  getOutboxSuccess,
  getOutboxFailure,
  getTracking,
  getTrackingSuccess,
  getTrackingFailure,
} = suratSlice.actions;

export default suratSlice.reducer;
