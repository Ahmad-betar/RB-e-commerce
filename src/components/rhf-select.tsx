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

interface Props {
  items: { label: string; value: string }[];
  label: string;
  placeholder?: string;
  className?: string;
  labelOnright?: boolean;
}
const RHFSelect = ({
  items,
  placeholder,
  className,
  label,
  labelOnright,
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

      <Select>
        <SelectTrigger
          className={cn("mr-4", { "mr-0 w-full": labelOnright }, className)}
        >
          <SelectValue placeholder={t(placeholder ?? "")} />
        </SelectTrigger>
        <SelectContent>
          {items.map(({ label, value }) => (
            <SelectItem value={value}>{label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default RHFSelect;
