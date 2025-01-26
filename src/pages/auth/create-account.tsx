import RHFSelect from "@/components/rhf-select";
import RHFTextarea from "@/components/rhf-textarea";
import TextField from "@/components/TextField";
import Title from "@/components/title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { t } from "i18next";

const CreateAccount = ({ create }: { create: boolean }) => {
  return (
    <form className="flex flex-col">
      {create ? (
        <Title text={t("create_account.create_account")} />
      ) : (
        <Title text={t("create_account.create_account")} />
      )}

      <div className="flex justify-between px-20">
        <TextField
          label="create_account.create_account"
          placeholder="create_account.enter_name"
        />
        <TextField
          label="create_account.email"
          placeholder="create_account.enter_email"
        />
        <div className="flex justify-between items-end gap-4">
          <TextField
            label="create_account.phone_number"
            placeholder="create_account.enter_phone_number"
          />

          <Badge variant={"outline"} className="h-9 py-0 mr-2">
            KW +986
          </Badge>
        </div>
      </div>

      <p className="text-4xl font-bold mt-8 mb-20 px-4">
        {t("create_account.address")}
      </p>

      {/* Address info */}
      <div className="grid grid-cols-3 gap-10 justify-between px-20 mb-10">
        <RHFSelect
          placeholder={t("form.enter_obj", {
            obj: t("create_account.country"),
          })}
          items={[]}
          label="create_account.country"
        />
        <RHFSelect
          placeholder={t("form.enter_obj", {
            obj: t("create_account.governorate"),
          })}
          items={[]}
          label="create_account.governorate"
        />
        <RHFSelect
          placeholder={t("form.enter_obj", {
            obj: t("create_account.region"),
          })}
          items={[]}
          label="create_account.region"
        />

        <TextField
          label="create_account.street"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.street"),
          })}
        />
        <TextField
          label="create_account.Avenue"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.Avenue"),
          })}
        />
        <TextField
          label="create_account.house"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.house"),
          })}
        />
        <TextField
          label="create_account.floor"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.floor"),
          })}
        />
        <TextField
          label="create_account.building"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.building"),
          })}
        />
        <TextField
          label="create_account.apartment"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.apartment"),
          })}
        />

        <RHFTextarea
          label="create_account.another_details"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.another_details"),
          })}
        />
      </div>

      <Button className="mx-auto w-40 font-bold">{t("form.save")}</Button>
    </form>
  );
};

export default CreateAccount;
