import { API_ROUTES } from "../api-routes";
import { API_BASE_URL, axiosInstance } from "../axios";

export const get_cart = async () => {
  const { data } = await axiosInstance.get(API_BASE_URL + API_ROUTES.cart.get);

  return data;
};

export const add_to_cart = async (params: any) => {
  const { data } = await axiosInstance.post(
    API_BASE_URL + API_ROUTES.cart.add,
    params
  );

  return data;
};

export const delete_cart = async () => {
  const { data } = await axiosInstance.delete(
    API_BASE_URL + API_ROUTES.cart.delete
  );

  return data;
};
