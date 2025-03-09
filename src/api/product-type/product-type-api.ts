import { API_ROUTES } from "../api-routes";
import { axiosInstance } from "../axios";
import { ProductTypeResponse } from "./type";

export const get_products_Type = async () => {
  const { data } = await axiosInstance.get<ProductTypeResponse>(
    API_ROUTES.product_type.get
  );

  return data;
};
