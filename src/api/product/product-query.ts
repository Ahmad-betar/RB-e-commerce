import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { get_best_seller, get_one_product, get_products } from "./products-api";
import { getProductParams } from "./type";

export const getProductsQuery = (params?: getProductParams) => {
  const queryResults = useQuery({
    queryKey: ["get-products", { ...params }],
    queryFn: async () => {
      const data = await get_products(params);

      return data;
    },
    placeholderData: keepPreviousData,
  });

  return queryResults;
};

export const getOneProductsQuery = (id: string) => {
  const queryResults = useQuery({
    queryKey: ["get-product"],
    queryFn: async () => {
      const data = await get_one_product(id);

      return data;
    },
    enabled: !!id,
    placeholderData: keepPreviousData,
  });

  return queryResults;
};

export const getBestSellerQuery = () => {
  const queryResults = useQuery({
    queryKey: ["get-best-seller"],
    queryFn: async () => {
      const data = await get_best_seller();

      return data;
    },
    placeholderData: keepPreviousData,
  });

  return queryResults;
};
