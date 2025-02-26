import { t } from "i18next";
import { InputProps } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";
import { Control } from "react-hook-form";

interface TextAreaProps extends InputProps {
  label: string;
  control?: Control<any, any>;
  placeholder?: string;
  labelOnRight?: boolean;
}
const RHFTextarea = ({ label, placeholder, labelOnRight }: TextAreaProps) => {
  return (
    <div
      className={cn("flex flex-col", { "flex-row items-center": labelOnRight })}
    >
      <Label className={cn("mb-4", { "mb-0 font-bold": labelOnRight })}>
        {t(label)}:
      </Label>

      <Textarea placeholder={t(placeholder ?? "")} className="mr-4" />
    </div>
  );
};

export default RHFTextarea;
