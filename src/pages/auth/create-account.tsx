import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import UserInfoForm from "@/components/user-info-form";
import Header from "@/layout/header";
import { t } from "i18next";

const CreateAccount = ({ create }: { create: boolean }) => {
  return (
    <>
      <Header />

      <form className="flex flex-col">
        {create ? (
          <Title text={"create_account.create_account"} />
        ) : (
          <Title text={"create_account.account_info"} />
        )}

        <UserInfoForm />

        <Button className="mx-auto w-40 font-bold mb-8">
          {t("form.save")}
        </Button>
      </form>
    </>
  );
};

export default CreateAccount;
