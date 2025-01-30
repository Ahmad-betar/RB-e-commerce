import { API_ROUTES } from "../api-routes";
import { API_BASE_URL, axiosInstance } from "../axios";

export const get_products = async (params: any) => {
  const { data } = await axiosInstance.get(
    API_BASE_URL + API_ROUTES.product.get,
    params
  );

  return data;
};

export const get_one_product = async (_params: any) => {
  const { data } = await axiosInstance.get(
    API_BASE_URL + API_ROUTES.product.getOne
  );

  return data;
};
