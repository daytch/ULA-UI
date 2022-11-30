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
    data: {},
  },
  reducers: {
    changeActiveSidebarMenu: (state, action) => {
      state.activeSidebarMenu = action.payload;
      localStorage.setItem("activeMenu", JSON.stringify(action.payload));
    },
    toogleLoading: (state, action) => {
      state.loading = action.payload;
    },

    getData: (state) => {
      state.loading = true;
    },
    getDataSuccess: (state, action) => {
      state.data = action.payload.res;
      state.message = action.payload.message;
      state.loading = false;
    },
    getDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const {
  changeActiveSidebarMenu,
  toogleLoading,
  getData,
  getDataSuccess,
  getDataFailure,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
