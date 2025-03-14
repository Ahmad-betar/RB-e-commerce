import TextField from "./TextField";
import { useFormContext } from "react-hook-form";
import RHFPhoneNumber from "./rhf-phone-number";

const UserInfoForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-20">
        <TextField
          required
          name="name"
          control={control}
          label="create_account.enter_name"
          placeholder="create_account.enter_name"
        />
        <TextField
          required
          type="email"
          name="email"
          control={control}
          label="create_account.email"
          placeholder="create_account.enter_email"
        />

        <RHFPhoneNumber
          name="phone"
          control={control}
          label="create_account.phone_number"
          placeholder="create_account.enter_phone_number"
        />

        <TextField
          required
          type="password"
          name="password"
          control={control}
          label="form.enter_password"
          placeholder="form.enter_password"
        />
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-between px-5 md:px-20 mb-10">
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
      </div> */}
    </>
  );
};

export default UserInfoForm;
