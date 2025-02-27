import { useMutation } from "@tanstack/react-query";
import {
  login,
  request_reset_password,
  reset_password,
  signup,
} from "./authentication-api";
import { toast } from "sonner";

export const loginQuery = () => {
  const queryResults = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => {
      toast("Success", { description: "Login Successful" });
    },
    onError: () => {
      toast("Error", { description: "Login failed" });
    },
  });

  return queryResults;
};

export const signupQuery = () => {
  const queryResults = useMutation({
    mutationKey: ["sign-up"],
    mutationFn: signup,
  });

  return queryResults;
};

export const requestPasswordResetQuery = () => {
  const queryResults = useMutation({
    mutationFn: request_reset_password,
    onSuccess: (data) => {
      toast(data.message);
    },
  });

  return queryResults;
};
export const resetPasswordQuery = () => {
  const queryResults = useMutation({
    mutationFn: reset_password,
  });

  return queryResults;
};
