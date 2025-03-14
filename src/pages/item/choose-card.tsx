import { getOfferQuery } from "@/api/offer/offer-query";
import RHFSelect from "@/components/rhf-select";
import RHFTextarea from "@/components/rhf-textarea";
import TextField from "@/components/TextField";
import { Label } from "@/components/ui/label";
import { t } from "i18next";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useParams } from "react-router-dom";

const ChooseCard = ({
  label,
  name,
  id: index,
}: {
  label: string;
  name: string;
  id: number;
}) => {
  const { id } = useParams();
  const { control, watch, setValue } = useFormContext();
  const { data } = getOfferQuery(id!);
  const productId = watch(name + index + ".productId");
  const sizes = watch(`size.${index}`);

  useEffect(() => {
    setValue(
      `size.${index}`,
      data?.data.products.find((product) => productId === product.product._id)
        ?.product.availableSizes
    );
  }, [productId]);

  return (
    <div className="flex flex-col gap-4 flex-grow">
      <Label className="text-xl font-bold">{t(label)}</Label>

      <div className="flex flex-col gap-4">
        <RHFSelect
          required
          name={name + index + ".productId"}
          control={control}
          items={
            data?.data.products.map(({ product: { _id, title } }) => ({
              label: title,
              value: _id,
            })) ?? []
          }
          label="product.product"
          labelOnright
          placeholder={t("form.enter_obj", {
            obj: t("product.product"),
          })}
        />
        <RHFSelect
          required
          name={name + index + ".size"}
          control={control}
          items={
            sizes?.map((size: number) => ({
              label: size,
              value: String(size),
            })) ?? []
          }
          label="item.size"
          labelOnright
          placeholder={t("form.enter_obj", {
            obj: t("item.size"),
          })}
        />
        <TextField
          required
          type="number"
          name={name + index + ".quantity"}
          control={control}
          label="form.quantity"
          placeholder={t("form.enter_obj", {
            obj: t("form.quantity"),
          })}
          labelOnRight
        />
        <RHFTextarea
          labelOnRight
          name={name + index + ".notes"}
          label="item.notes"
          placeholder={t("form.enter_obj", {
            obj: t("item.notes"),
          })}
        />
      </div>
    </div>
  );
};

export default ChooseCard;
