import { t } from "i18next";
import { signupQuery } from "@/api/authentication/authentication-query";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import UserInfoForm from "@/components/user-info-form";
import Header from "@/layout/header";
import { FormProvider, useForm } from "react-hook-form";
import { signupType } from "@/api/authentication/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

const FormSchema = z.object({
  name: z.string(),
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: t("form.invalid_phone") }),
  email: z.string(),
  password: z.string(),
});

const CreateAccount = ({ create }: { create: boolean }) => {
  const methods = useForm<signupType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
    },
  });
  const { mutate, isPending } = signupQuery();

  const onSubmit = (data: signupType) => {
    mutate(data, {});
  };

  return (
    <FormProvider {...methods}>
      <Header />

      <form className="flex flex-col" onSubmit={methods.handleSubmit(onSubmit)}>
        {create ? (
          <Title text={"create_account.create_account"} />
        ) : (
          <Title text={"create_account.account_info"} />
        )}

        <UserInfoForm />

        <Button className="mx-auto w-40 font-bold mb-8" disabled={isPending}>
          {t("form.save")}
        </Button>
      </form>
    </FormProvider>
  );
};

export default CreateAccount;
