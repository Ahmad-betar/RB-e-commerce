import { Input } from "./ui/input";
import { Button } from "./ui/button";

const CouponInput = () => {
  return (
    <div className="flex flex-col">
      <label className="mb-2">هل لديك كود خصم؟</label>
      <div className="flex border border-gray-200 rounded-sm">
        <Input className="rounded-none border-none" />
        <Button
          variant="secondary"
          className="rounded-tl-sm rounded-bl-sm rounded-tr-none rounded-br-none"
        >
          تطبيق
        </Button>
      </div>
    </div>
  );
};

export default CouponInput;
