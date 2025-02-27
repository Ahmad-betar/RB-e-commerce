import TextField from "./TextField";
import { Badge } from "./ui/badge";
import RHFSelect from "./rhf-select";
import { t } from "i18next";
import RHFTextarea from "./rhf-textarea";
import { useForm } from "react-hook-form";

const UserInfoForm = () => {
  const { control } = useForm();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-20">
        <TextField
          name="name"
          control={control}
          label="create_account.create_account"
          placeholder="create_account.enter_name"
        />
        <TextField
          type="email"
          name="email"
          control={control}
          label="create_account.email"
          placeholder="create_account.enter_email"
        />

        <div className="flex justify-between items-end gap-4">
          <TextField
            type="number"
            name="phone"
            control={control}
            label="create_account.phone_number"
            placeholder="create_account.enter_phone_number"
          />

          <Badge variant={"outline"} className="h-9 py-0 px-0 md:px-2 mr-2">
            KW +986
          </Badge>
        </div>

        <TextField
          type="password"
          name="password"
          control={control}
          label="form.enter_password"
          placeholder="form.enter_password"
        />
      </div>

      <p className="text-4xl font-bold mt-8 mb-20 px-4">
        {t("create_account.address")}
      </p>

      {/* Address info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-between px-5 md:px-20 mb-10">
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

        {/* <TextField
          name=""
          control={control}
          label="create_account.street"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.street"),
          })}
        />
        <TextField
          name=""
          control={control}
          label="create_account.Avenue"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.Avenue"),
          })}
        />
        <TextField
          name=""
          control={control}
          label="create_account.house"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.house"),
          })}
        />
        <TextField
          name=""
          control={control}
          label="create_account.floor"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.floor"),
          })}
        />
        <TextField
          name=""
          control={control}
          label="create_account.building"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.building"),
          })}
        />
        <TextField
          name=""
          control={control}
          label="create_account.apartment"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.apartment"),
          })}
        /> */}

        <RHFTextarea
          name=""
          control={control}
          label="create_account.address"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.address"),
          })}
        />

        <RHFTextarea
          name=""
          control={control}
          label="create_account.another_details"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.another_details"),
          })}
        />
      </div>
    </>
  );
};

export default UserInfoForm;
