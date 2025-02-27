import { t } from "i18next";
import { Input, InputProps } from "./ui/input";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";
import { Control, Controller } from "react-hook-form";

interface TextFieldProps extends InputProps {
  label: string;
  placeholder?: string;
  labelOnRight?: boolean;
  name: string;
  control: Control<any, any>;
}

const TextField = ({
  label,
  placeholder,
  labelOnRight,
  control,
  name,
  ...props
}: TextFieldProps) => {
  return (
    <div
      className={cn("flex flex-col flex-grow", {
        "flex-row items-center": labelOnRight,
      })}
    >
      <Label className={cn("mb-4", { "mb-0 font-bold": labelOnRight })}>
        {t(label)}:
      </Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input
            placeholder={t(placeholder || "")}
            className="mr-4"
            {...field}
            {...props}
          />
        )}
      />
    </div>
  );
};

export default TextField;
