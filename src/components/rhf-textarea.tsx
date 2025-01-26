import { t } from "i18next";
import { InputProps } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface TextAreaProps extends InputProps {
  label: string;
  placeholder?: string;
}
const RHFTextarea = ({ label, placeholder }: TextAreaProps) => {
  return (
    <div className="flex flex-col">
      <Label className="mb-2">{t(label)}:</Label>
      <Textarea placeholder={t(placeholder ?? "")} className="mr-4" />
    </div>
  );
};

export default RHFTextarea;
