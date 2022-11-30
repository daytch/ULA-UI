import axios from "axios";
import { API_URL } from "./../constants";

const token = localStorage.getItem("token");

let api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json;charset=utf-8",
    "x-access-token": token ? token : "",
  },
});

api.interceptors.request.use(
  function (config) {
    config.headers.set("x-access-token", token);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    if (response.data.ErrorCode === 400) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return response.data;
  },
  function (error) {
    if (error.response.status === 401) {
      // localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export { default as setAuthorizationHeader } from "./setAuthorizationHeader.js";
export default api;
