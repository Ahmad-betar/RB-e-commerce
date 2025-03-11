import { Trash2 } from "lucide-react";
import image from "@/assets/to-delete/home image.png";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  changeItemQuantityQuery,
  deleteCartQuery,
} from "@/api/cart/cart-query";
import { t } from "i18next";

interface CartItemProps {
  id: string;
  title: string;
  notes: string;
  size: number;
  price: number;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

const CartItem = ({
  id,
  title,
  notes,
  price,
  size,
  quantity,
}: CartItemProps) => {
  const { mutate: Delete } = deleteCartQuery();
  const { mutate: changeQuantity, isPending: isChanging } =
    changeItemQuantityQuery();

  const isDeleted = !title;

  return (
    <div className="flex items-center justify-between rounded-lg bg-gray-50 h-full p-2">
      <div className="flex items-center gap-4 h-full w-full">
        <img
          src={image}
          className="rounded-lg bg-secondary self-start object-contain h-20"
        />

        <div className="flex justify-between w-full h-full">
          {isDeleted && (
            <>
              <h3 className="font-medium">{t("product.product_deleted")}</h3>
            </>
          )}

          {!isDeleted && (
            <div className="flex flex-col justify-between h-full gap-2">
              <h3 className="font-medium">{title}</h3>

              <h3 className="font-light text-xs">{notes}</h3>

              <Badge className="flex w-fit justify-center" variant={"outline"}>
                {size}
              </Badge>

              <div className="flex items-center gap-2 border border-secondary rounded-sm w-fit">
                <Button
                  disabled={isChanging}
                  onClick={() =>
                    changeQuantity({ itemId: id, quantityChange: 1 })
                  }
                  type="button"
                  className="py-0 px-1 h-fit font-bold bg-transparent shadow-none hover:bg-transparent text-secondary"
                >
                  +
                </Button>

                <span className="w-8 text-center text-secondary">
                  {quantity}
                </span>

                <Button
                  disabled={isChanging}
                  onClick={() =>
                    changeQuantity({ itemId: id, quantityChange: -1 })
                  }
                  type="button"
                  className="py-0 px-1 h-fit font-bold bg-transparent shadow-none hover:bg-transparent text-secondary"
                >
                  -
                </Button>
              </div>
            </div>
          )}

          <div className="flex flex-col justify-between gap-2">
            <p className="text-secondary">{price} د.ك</p>

            <div className="flex gap-4">
              <Button variant={"ghost"} onClick={() => Delete({ itemId: id })}>
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
