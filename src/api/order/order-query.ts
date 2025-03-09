// queries.ts
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  create_order,
  create_order_from_temp,
  download_order,
  get_one_order,
  get_orders,
} from "./order-api";
import { t } from "i18next";
import { toast } from "sonner";

// Get all orders
export const useOrdersQuery = ({ page = 1 }: { page?: number }) => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      return get_orders({ page });
    },
  });
};

// Get a single order by ID
export const useOneOrderQuery = (orderId: string) => {
  return useQuery({
    queryKey: ["order", orderId],
    queryFn: () => get_one_order(orderId),
    enabled: !!orderId, // Only fetch if orderId is provided
  });
};

// Create an order
export const useCreateOrderMutation = () => {
  return useMutation({
    mutationFn: create_order,
    onSuccess: () => {
      toast(t("form.form_success"));
    },
    onError: () => {
      toast(t("form.form_error"));
    },
  });
};

// Create an order from a temporary order
export const useCreateOrderFromTempMutation = () => {
  return useMutation({
    mutationFn: create_order_from_temp,
  });
};

// Download an order by ID
export const useDownloadOrderMutation = () => {
  return useMutation({
    mutationFn: download_order,
  });
};
