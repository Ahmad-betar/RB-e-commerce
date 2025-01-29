import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { add_to_cart, delete_cart, get_cart } from "./cart-api";

export const getCartQuery = () => {
  const queryResults = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const data = await get_cart();

      return data;
    },
    placeholderData: keepPreviousData,
  });

  return queryResults;
};

export const addToCartQuery = () => {
  const queryResults = useMutation({
    mutationKey: ["add-to-cart"],
    mutationFn: add_to_cart,
  });

  return queryResults;
};

export const deleteCartQuery = () => {
  const queryResults = useMutation({
    mutationKey: ["delete-cart"],
    mutationFn: delete_cart,
  });

  return queryResults;
};
