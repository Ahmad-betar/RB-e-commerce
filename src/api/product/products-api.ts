import { API_ROUTES } from "../api-routes";
import { axiosInstance } from "../axios";
import { getProductType } from "./type";

export const get_products = async () => {
  const { data } = await axiosInstance.get<getProductType>(
    API_ROUTES.product.get
  );

  return data;
};

export const get_one_product = async (_params: any) => {
  const { data } = await axiosInstance.get(API_ROUTES.product.getOne);

  return data;
};
