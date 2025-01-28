import { Edit, Share2, Trash2 } from "lucide-react";
import image from "@/assets/to-delete/home image.png";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  title: string;
  price: number;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  onDelete: () => void;
}

const CartItem = ({
  title,
  price,
  quantity,
  onQuantityChange,
  onDelete,
}: CartItemProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-gray-50 h-24 p-2">
      <div className="flex items-center gap-4 h-full w-full">
        <img
          src={image}
          className="rounded-lg bg-secondary object-contain h-full"
        />

        <div className="flex justify-between w-full h-full">
          <div className="flex flex-col justify-between h-full">
            <h3 className="font-medium">{title}</h3>

            <div className="flex items-center gap-2 border border-secondary rounded-sm w-fit">
              <Button
                onClick={() => onQuantityChange(quantity + 1)}
                className="py-0 px-1 h-fit font-bold bg-transparent shadow-none hover:bg-transparent text-secondary"
              >
                +
              </Button>
              <span className="w-8 text-center text-secondary">{quantity}</span>
              <Button
                onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
                className="py-0 px-1 h-fit font-bold bg-transparent shadow-none hover:bg-transparent text-secondary"
              >
                -
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-2">
            <p className="text-secondary">50 د.ك</p>
            <div className="flex gap-4">
              <Edit className="h-5 w-5" />

              <Trash2 className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
