import { useMutation, useQuery } from "@tanstack/react-query";
import { add_temp_order, get_temp_order } from "./temp-order-api";

export const tempOrderQuery = (id: string) => {
  return useQuery({
    queryKey: ["temp-orders"],
    queryFn: async () => {
      return await get_temp_order(id);
    },
  });
};

export const addTempOrderMutation = () => {
  return useMutation({ mutationFn: add_temp_order });
};
