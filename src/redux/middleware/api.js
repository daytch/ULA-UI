import axios from "axios";
import { API_URL } from "./../constants";

let api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    // "content-type": "application/json",
  },
});

api.interceptors.request.use(
  async function (config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.common['x-access-token'] = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
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
    return Promise.reject(error);
  }
);

export default api;
