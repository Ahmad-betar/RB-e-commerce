import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { add_to_cart, change_item_quantity, delete_cart, get_cart } from "./cart-api";

export const getCartQuery = () => {
  const queryResults = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const data = await get_cart();

      return data;
    },
    enabled : !!localStorage.getItem('token'),
    placeholderData: keepPreviousData,
  });

  return queryResults;
};

export const addToCartQuery = () => {
  const queryClient = useQueryClient();

  const queryResults = useMutation({
    mutationFn: add_to_cart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return queryResults;
};

export const deleteCartQuery = () => {
  const queryClient = useQueryClient();

  const queryResults = useMutation({
    mutationFn: delete_cart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return queryResults;
};

export const changeItemQuantityQuery = () => {
  const queryClient = useQueryClient();

  const queryResults = useMutation({
    mutationFn: change_item_quantity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return queryResults;
};
