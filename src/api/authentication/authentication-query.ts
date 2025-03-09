import { useMutation } from "@tanstack/react-query";
import {
  login,
  request_reset_password,
  reset_password,
  signup,
} from "./authentication-api";
import { toast } from "sonner";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";

export const loginQuery = () => {
  const queryResults = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => {
      toast(t("form.form_success"));
    },
    onError: () => {
      toast(t("form.form_error"));
    },
  });

  return queryResults;
};

export const signupQuery = () => {
  const navigate = useNavigate();

  const queryResults = useMutation({
    mutationKey: ["sign-up"],
    mutationFn: signup,
    onSuccess: () => {
      toast(t("form.form_success"));
      navigate("/");
    },
    onError: () => {
      toast(t("form.form_error"));
    },
  });

  return queryResults;
};

export const requestPasswordResetQuery = () => {
  const navigate = useNavigate();

  const queryResults = useMutation({
    mutationFn: request_reset_password,
    onSuccess: (data) => {
      toast(data.message);
      navigate("/reset-password");
    },
  });

  return queryResults;
};
export const resetPasswordQuery = () => {
  const navigate = useNavigate();

  const queryResults = useMutation({
    mutationFn: reset_password,
    onSuccess: () => {
      toast(t("form.form_success"));
      navigate("/");
    },
    onError(error: any) {
      toast(error.response.data.result);
    },
  });

  return queryResults;
};
