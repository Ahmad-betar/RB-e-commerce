// queries.ts
import { useQuery } from "@tanstack/react-query";
import { get_populars } from "./popular-api";

export const usePopularsQuery = () => {
  return useQuery({
    queryKey: ["populars"],
    queryFn: get_populars,
  });
};
