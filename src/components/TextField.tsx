import { t } from "i18next";
import { Input, InputProps } from "./ui/input";
import { Label } from "./ui/label";

interface TextFieldProps extends InputProps {
  label: string;
  placeholder?: string;
}

const TextField = ({ label, placeholder }: TextFieldProps) => {
  return (
    <div className="flex flex-col">
      <Label className="mb-2">{t(label)}:</Label>
      <Input placeholder={t(placeholder || "")} className="mr-4" />
    </div>
  );
};

export default TextField;
