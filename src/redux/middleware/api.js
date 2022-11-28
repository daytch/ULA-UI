import axios from "axios";
import { API_URL } from "./../constants";

let api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json;charset=utf-8",
  },
});

api.defaults.headers.common["x-access-token"] = localStorage.getItem("token");

api.interceptors.response.use(
  function (response) {
    debugger;
    if (response.data.ErrorCode === 400) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { default as setAuthorizationHeader } from "./setAuthorizationHeader.js";
export default api;
