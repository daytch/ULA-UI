import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "Dashboard",
  initialState: {
    activeSidebarMenu: {
      dashboard: true,
      input: false,
      masuk: false,
      keluar: false,
      laporan: false,
    },
    loading: false,
  },
  reducers: {
    changeActiveSidebarMenu: (state, action) => {
      state.activeSidebarMenu = action.payload;
    },
    toogleLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { changeActiveSidebarMenu, toogleLoading } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
