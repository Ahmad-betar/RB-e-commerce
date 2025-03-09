import { API_BASE_URL } from "./../axios";
import axios from "axios";
import { API_ROUTES } from "../api-routes";
import { loginType, resetPassword, signupType } from "./type";

export const login = async (params: loginType) => {
  const data = await axios.post<{ JWT: string }>(
    API_BASE_URL + API_ROUTES.authentication.login,
    params
  );

  // console.log(headers);
  return data;
};

export const signup = async (params: signupType) => {
  const { data } = await axios.post(
    API_BASE_URL + API_ROUTES.authentication.signUp,
    params
  );

  return data;
};

export const request_reset_password = async (payload: { email: string }) => {
  const { data } = await axios.post<{ message: string }>(
    API_BASE_URL + API_ROUTES.authentication.requestPasswordReset,
    payload
  );

  return data;
};

export const reset_password = async (payload: resetPassword) => {
  const { data } = await axios.post<{ message: string }>(
    API_BASE_URL + API_ROUTES.authentication.resetPassword,
    payload
  );

  return data;
};
