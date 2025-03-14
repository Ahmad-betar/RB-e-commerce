import { API_ROUTES } from "../api-routes";
import { axiosInstance } from "../axios";
import { Pixel } from "./type";

// Get the pixel data
export const getPixel = async () => {
  const { data } = await axiosInstance.get<Pixel>(API_ROUTES.pixel.get);
  return data;
};
