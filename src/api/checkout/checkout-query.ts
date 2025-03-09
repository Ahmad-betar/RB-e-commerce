import { useMutation } from "@tanstack/react-query";
import { get_checkout } from "./checkout-api";

export const getCheckoutMutation = () => {
  return useMutation({
    mutationKey: ["checkout"],
    mutationFn: get_checkout,
  });
};
