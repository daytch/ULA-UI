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
  },
  reducers: {
    changeActiveSidebarMenu: (state, action) => {
      
      state.activeSidebarMenu = action.payload;
    },
  },
});

export const { changeActiveSidebarMenu } = dashboardSlice.actions;

export default dashboardSlice.reducer;
