import { t } from "i18next";
import { Input, InputProps } from "./ui/input";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

interface TextFieldProps extends InputProps {
  label: string;
  placeholder?: string;
  labelOnRight?: boolean;
}

const TextField = ({ label, placeholder, labelOnRight }: TextFieldProps) => {
  return (
    <div
      className={cn("flex flex-col flex-grow", { "flex-row items-center": labelOnRight })}
    >
      <Label className={cn("mb-4", { "mb-0 font-bold": labelOnRight })}>
        {t(label)}:
      </Label>
      <Input placeholder={t(placeholder || "")} className="mr-4" />
    </div>
  );
};

export default TextField;
