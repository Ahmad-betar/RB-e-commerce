import { API_ROUTES } from "../api-routes";
import { axiosInstance } from "../axios";
import { bannerResponse } from "./type";

export const get_banner = async () => {
  const { data } = await axiosInstance.get<bannerResponse>(
    API_ROUTES.banner.get
  );

  return data;
};
