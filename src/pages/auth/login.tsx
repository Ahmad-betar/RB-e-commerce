import TextField from "@/components/TextField";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { t } from "i18next";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-50">
      <Card className="w-1/2 p-4">
        <CardContent className="flex flex-col justify-between gap-8">
          <TextField
            label="form.enter_username"
            placeholder="form.enter_email_password"
          />

          <TextField
            label="form.enter_password"
            placeholder="form.please_password"
          />

          <Button className="w-fit self-center">{t("form.continue")}</Button>

          <p className="self-center">
            {t("form.dont_have_account") + " "}
            <Link to={"/create-account"} className="text-secondary underline">
              {t("auth.create_account")}
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
