import { API_ROUTES } from "../api-routes";
import { axiosInstance } from "../axios";
import { OneOrderResponse, OrdersResponse } from "./type";

// Get all orders
export const get_orders = async ({ page = 1 }: { page?: number }) => {
  const { data } = await axiosInstance.get<OrdersResponse>(
    API_ROUTES.order.orders,
    { params: { page, limit: 10 } }
  );
  return data;
};

// Get a single order by ID
export const get_one_order = async (orderId: string) => {
  const { data } = await axiosInstance.get<OneOrderResponse>(
    `${API_ROUTES.order.oneOrder}${orderId}`
  );
  return data;
};

// Create an order
export const create_order = async (orderData: any) => {
  const { data } = await axiosInstance.post(API_ROUTES.order.order, orderData);
  return data;
};

// Create an order from a temporary order
export const create_order_from_temp = async (tempOrderData: any) => {
  const { data } = await axiosInstance.post(
    API_ROUTES.order.customer_order,
    tempOrderData
  );
  return data;
};

// Download an order by ID
export const download_order = async (orderId: string) => {
  const { data } = await axiosInstance.get(
    `${API_ROUTES.order.downloadOrder}${orderId}`
  );
  return data;
};
