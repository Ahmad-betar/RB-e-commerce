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
}
const RHFSelect = ({ items, placeholder, className, label }: Props) => {
  return (
    <div className="flex flex-col">
      <Label className="mb-2">{t(label)}:</Label>

      <Select>
        <SelectTrigger className={cn("mr-4", className)}>
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
