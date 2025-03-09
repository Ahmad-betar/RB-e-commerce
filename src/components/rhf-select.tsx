import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";
import { t } from "i18next";
import { cn } from "@/lib/utils";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  items: { label: string; value: string }[];
  label: string;
  placeholder?: string;
  className?: string;
  labelOnright?: boolean;
  name: string;
  control: any;
  disabled?: boolean;
}
const RHFSelect = ({
  items,
  placeholder,
  className,
  label,
  labelOnright,
  name,
  disabled,
  control,
}: Props) => {
  return (
    <div
      className={cn("flex flex-col", {
        "flex-row gap-4": labelOnright,
      })}
    >
      <Label
        className={cn("mb-2", {
          "flex items-center font-bold mb-0 p-1": labelOnright,
        })}
      >
        {t(label) + (label ? ":" : "")}
      </Label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select disabled={disabled} {...field} onValueChange={field.onChange}>
            <SelectTrigger
              className={cn("mr-4", { "mr-0 w-full": labelOnright }, className)}
            >
              <SelectValue placeholder={t(placeholder ?? "")} />
            </SelectTrigger>
            <SelectContent>
              {items.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {t(label)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
};

export default RHFSelect;
