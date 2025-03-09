import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { get_products_Type } from "./product-type-api";

export const getProductsTypeQuery = () => {
  const queryResults = useQuery({
    queryKey: ["get-products-type"],
    queryFn: async () => {
      const data = await get_products_Type();

      return data;
    },
    placeholderData: keepPreviousData,
  });

  return queryResults;
};
