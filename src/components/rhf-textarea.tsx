import { t } from "i18next";
import { InputProps } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";
import { Controller, useFormContext } from "react-hook-form";

interface TextAreaProps extends InputProps {
  label: string;
  placeholder?: string;
  labelOnRight?: boolean;
  name: string;
}
const RHFTextarea = ({
  label,
  name,
  placeholder,
  labelOnRight,
}: TextAreaProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div
          className={cn("flex flex-col", {
            "flex-row items-center": labelOnRight,
          })}
        >
          <Label className={cn("mb-4", { "mb-0 font-bold": labelOnRight })}>
            {t(label)}:
          </Label>

          <Textarea
            placeholder={t(placeholder ?? "")}
            className="mr-4"
            {...field}
          />
        </div>
      )}
    />
  );
};

export default RHFTextarea;
