import { API_ROUTES } from "../api-routes";
import { axiosInstance } from "../axios";
import { getPopularResponse } from "./type";

// Get all popular items
export const get_populars = async () => {
  const { data } = await axiosInstance.get<getPopularResponse>(
    API_ROUTES.popular.get
  );
  return data;
};
