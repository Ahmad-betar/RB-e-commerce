import { loginQuery } from "@/api/authentication/authentication-query";
import TextField from "@/components/TextField";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { t } from "i18next";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginType } from "@/api/authentication/type";

const Login = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<loginType>();
  const { mutate, isPending } = loginQuery();

  const submitHandler = (values: loginType) => {
    mutate(values, {
      onSuccess: (data) => {
        localStorage.setItem("token", data.data.JWT);
        navigate("/");
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex justify-center items-center w-screen h-screen bg-gray-50"
    >
      <Card className="md:w-1/2 p-4">
        <CardContent className="flex flex-col justify-between gap-8">
          <TextField
            control={control}
            name="email"
            label="form.enter_username"
            placeholder="form.enter_email_password"
          />

          <TextField
            control={control}
            name="password"
            label="form.enter_password"
            placeholder="form.please_password"
          />

          <Button className="w-fit self-center" disabled={isPending}>
            {t("form.continue")}
          </Button>

          <p className="self-center">
            {t("form.dont_have_account") + " "}
            <Link to={"/create-account"} className="text-secondary underline">
              {t("auth.create_account")}
            </Link>
          </p>
        </CardContent>
      </Card>
    </form>
  );
};

export default Login;
