import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { get_one_product, get_products } from "./products-api";

export const getProductsQuery = () => {
  const queryResults = useQuery({
    queryKey: ["get-products"],
    queryFn: async () => {
      const data = await get_products();

      return data;
    },
    placeholderData: keepPreviousData,
  });

  return queryResults;
};

export const getOneProductsQuery = async (_params: any) => {
  const queryResults = useQuery({
    queryKey: ["get-product"],
    queryFn: async () => {
      const data = await get_one_product({});

      return data;
    },
    placeholderData: keepPreviousData,
  });

  return queryResults;
};
