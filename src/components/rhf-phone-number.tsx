import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { PhoneInput } from "@/components/ui/phone-number";
import { t } from "i18next";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

interface PhoneNumberType {
  label: string;
  control: Control;
  name: string;
  placeholder?: string;
}

export default function RHFPhoneNumber({
  name,
  control,
  label,
  placeholder,
}: PhoneNumberType) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className={cn("flex flex-col flex-grow", {})}>
          <Label className={cn("mb-4")}>{t(label)}:</Label>
          <FormItem className="flex flex-col items-start">
            <FormControl className="w-full">
              <PhoneInput
                placeholder={placeholder && t(placeholder)}
                international
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        </div>
      )}
    />
  );
}
