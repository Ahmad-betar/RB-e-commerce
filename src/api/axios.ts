import axios from "axios";

export const API_BASE_URL = "https://rb-o8z2.onrender.com/";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response: any) => {
    return Promise.resolve(response);
  },
  (error: any) => {
    if (error.response && error.response.status === 401) {
      // Replace the current history entry with the home page URL
      window.history.replaceState(null, "", "/#/");
      // Redirect to the login page
      window.location.href = "/#/login";
    }
    return Promise.reject(error);
  }
);
