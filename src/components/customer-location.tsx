import RHFSelect from "./rhf-select";
import { t } from "i18next";
import RHFTextarea from "./rhf-textarea";
import { useFormContext } from "react-hook-form";
import { getStatesQuery } from "@/api/state/state-query";
import { getGovernoratesQuery } from "@/api/governorates/governorates-query";
import { getCitiesQuery } from "@/api/city/city-query";

const CustomerLocation = () => {
  const { control, watch } = useFormContext();

  const state = watch("deliveryAddress.state");
  const governorate = watch("deliveryAddress.governorate");

  const { data: states } = getStatesQuery();
  const { data: governorates } = getGovernoratesQuery(state);
  const { data: cities } = getCitiesQuery(governorate);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-between px-5 md:px-20 mb-10">
        <RHFSelect
          control={control}
          name="deliveryAddress.state"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.country"),
          })}
          items={
            states?.map((state) => ({
              label: state.name,
              value: state._id,
            }))! ?? []
          }
          label="create_account.country"
        />

        <RHFSelect
          disabled={!state}
          control={control}
          name="deliveryAddress.governorate"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.governorate"),
          })}
          items={
            governorates?.map(({ _id, name }) => ({
              label: name,
              value: _id,
            }))! ?? []
          }
          label="create_account.governorate"
        />

        <RHFSelect
          disabled={!governorate}
          control={control}
          name="deliveryAddress.city"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.region"),
          })}
          items={
            cities?.map(({ _id, name }) => ({
              label: name,
              value: _id,
            }))! ?? []
          }
          label="create_account.region"
        />

        <RHFTextarea
          name="deliveryAddress.notes"
          label="create_account.address"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.address"),
          })}
        />

        <RHFTextarea
          name="notes"
          label="create_account.another_details"
          placeholder={t("form.enter_obj", {
            obj: t("create_account.another_details"),
          })}
        />
      </div>
    </>
  );
};

export default CustomerLocation;
