import { API_BASE_URL } from "./../axios";
import axios from "axios";
import { API_ROUTES } from "../api-routes";
import { loginType, signupType } from "./type";

export const login = async (params: loginType) => {
  const data = await axios.post<loginType>(
    API_BASE_URL + API_ROUTES.authentication.login,
    params
  );

  // console.log(headers);
  return data;
};

export const signup = async (params: signupType) => {
  const { data } = await axios.post<signupType>(
    API_BASE_URL + API_ROUTES.authentication.signUp,
    params
  );

  return data;
};
