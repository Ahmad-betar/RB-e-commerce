import axsio from "axios";

export const BASE_URL = "https://commonsensesqaure.pythonanywhere.com/";
export const API_BASE_URL = "https://rb-o8z2.onrender.com/";

export const axiosInstance = axsio.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config: any) => {
  config.headers.Authorization = "Bearer " + localStorage.getItem("token");

  return config;
});

axiosInstance.interceptors.response.use(
  (response: any) => {
    return Promise.resolve(response);
  },
  (errors: any) => {
    // if (errors.response.status === 401) {
    //   window.location.href = "/sign-in";
    // }
    return Promise.reject(errors);
  }
);
