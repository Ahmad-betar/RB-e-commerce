import { API_ROUTES } from "../api-routes";
import { axiosInstance } from "../axios";
import { checkoutPayload, checkoutResponse } from "./type";

export const get_checkout = async (payload: checkoutPayload) => {
  const { data } = await axiosInstance.post<checkoutResponse>(
    API_ROUTES.checkout.get,
     payload
  );

  return data;
};
