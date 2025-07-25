import axios from "axios";
import { API_CONFUG } from "../config";

export const apiClient = axios.create({
  baseURL: API_CONFUG.baseURL,
  timeout: 30000,
});

//!interceptors
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token) {
    config.headers.token = token;
  }

  return config;
});

//!interceptors
apiClient.interceptors.response.use(
  (response) => {
    return Promise.resolve({
      success: true,
      data: response,
    });
  },
  (error) => {
    return Promise.reject({
      success: false,
      error: error,
      message: error.response.data.message,
    });
  }
);
