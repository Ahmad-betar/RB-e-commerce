import { API_ROUTES } from "../api-routes";
import { axiosInstance } from "../axios";
import { addToCart, changeItemQuantity, deleteFromCart, getCartType } from "./type";

export const get_cart = async () => {
  const { data } = await axiosInstance.get<getCartType>(API_ROUTES.cart.get);

  return data;
};

export const add_to_cart = async (payload: addToCart) => {
  const { data } = await axiosInstance.post(API_ROUTES.cart.add, payload);

  return data;
};

export const delete_cart = async (payload: deleteFromCart) => {
  const { data } = await axiosInstance.delete(API_ROUTES.cart.delete, {
    data: payload,
  });

  return data;
};

export const change_item_quantity = async (payload: changeItemQuantity) => {
  const { data } = await axiosInstance.delete(API_ROUTES.cart.update, {
    data: payload,
  });

  return data;
};
