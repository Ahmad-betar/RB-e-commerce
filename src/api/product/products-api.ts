import { API_ROUTES } from "../api-routes";
import { axiosInstance } from "../axios";
import { getBestSeller, getOneProductResponse, getProductParams, getProductType } from "./type";

export const get_products = async (params?: getProductParams) => {
  const { data } = await axiosInstance.get<getProductType>(
    API_ROUTES.product.get,
    { params: { ...params } }
  );

  return data;
};

export const get_one_product = async (id: string) => {
  const { data } = await axiosInstance.get<getOneProductResponse>(
    API_ROUTES.product.getOne + id
  );

  return data;
};

export const get_best_seller = async () => {
  const { data } = await axiosInstance.get<getBestSeller>(
    API_ROUTES.product.bestsellers
  );

  return data;
};
