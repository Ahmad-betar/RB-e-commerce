import { API_ROUTES } from "../api-routes";
import { axiosInstance } from "../axios";
import { addProductToTempOrder, getTempOrderResponse } from "./type";

export const get_temp_order = async (id: string) => {
  const { data } = await axiosInstance.get<getTempOrderResponse>(
    API_ROUTES.tempOrder.get + id
  );

  return data;
};

export const add_temp_order = async (payload: addProductToTempOrder) => {
  return await axiosInstance.post(API_ROUTES.tempOrder.add, payload);
};
