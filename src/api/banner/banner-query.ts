import { useQuery } from "@tanstack/react-query";
import { get_banner } from "./banner-api";

export const getBannerQuery = () => {
  return useQuery({
    queryKey: ["get-banner"],
    queryFn: async () => {
      return get_banner();
    },
  });
};
