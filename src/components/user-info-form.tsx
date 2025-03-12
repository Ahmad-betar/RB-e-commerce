import TextField from "./TextField";
import { Badge } from "./ui/badge";
import { useFormContext } from "react-hook-form";

const UserInfoForm = () => {
  const { control } = useFormContext();
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
