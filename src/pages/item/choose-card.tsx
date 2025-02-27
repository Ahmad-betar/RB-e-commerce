import RHFSelect from "@/components/rhf-select";
import TextField from "@/components/TextField";
import { Label } from "@/components/ui/label";
import { t } from "i18next";
import { useForm } from "react-hook-form";

const ChooseCard = ({ label }: { label: string }) => {
  const { control } = useForm();
  return (
    <div className="flex flex-col gap-8 flex-grow">
      <Label className="text-3xl font-bold">{t(label)}</Label>

      <div className="flex flex-col gap-4">
        <RHFSelect
          items={[]}
          label="item.abaya"
          labelOnright
          placeholder={t("form.enter_obj", {
            obj: t("item.abaya"),
          })}
        />
        <RHFSelect
          items={[]}
          label="item.size"
          labelOnright
          placeholder={t("form.enter_obj", {
            obj: t("item.size"),
          })}
        />
        <RHFSelect
          items={[]}
          label="item.abaya_type"
          labelOnright
          placeholder={t("form.enter_obj", {
            obj: t("item.abaya_type"),
          })}
        />
        <TextField
          control={control}
          name=""
          label="item.notes"
          placeholder={t("form.enter_obj", {
            obj: t("item.notes"),
          })}
          labelOnRight
        />
      </div>
    </div>
  );
};

export default ChooseCard;
