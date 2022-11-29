import { createSlice } from "@reduxjs/toolkit";
import { isObjectEmpty } from "./../../functions/index";

const activeMenu = JSON.parse(localStorage.getItem("activeMenu"));
export const dashboardSlice = createSlice({
  name: "Dashboard",
  initialState: {
    activeSidebarMenu: isObjectEmpty(activeMenu)
      ? {
          dashboard: true,
          input: false,
          masuk: false,
          keluar: false,
          laporan: false,
        }
      : activeMenu,
    loading: false,
  },
  reducers: {
    changeActiveSidebarMenu: (state, action) => {
      state.activeSidebarMenu = action.payload;
      localStorage.setItem("activeMenu", JSON.stringify(action.payload));
    },
    toogleLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { changeActiveSidebarMenu, toogleLoading } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
