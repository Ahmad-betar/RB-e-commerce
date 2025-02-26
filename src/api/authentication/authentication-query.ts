import { useMutation } from "@tanstack/react-query";
import { login, signup } from "./authentication-api";

export const loginQuery = () => {
  const queryResults = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
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
