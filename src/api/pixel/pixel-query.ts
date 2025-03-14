// queries.ts
import { useQuery,  } from "@tanstack/react-query";
import {  getPixel } from "./pixel-api";

// Get Pixel Query
export const usePixelQuery = () => {
  return useQuery({
    queryKey: ["pixel"],
    queryFn: getPixel,
  });
};
