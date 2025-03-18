import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { t } from "i18next";
import CartItem from "../cart/cart-item";
import { getCartQuery } from "@/api/cart/cart-query";
import { FormProvider, useForm } from "react-hook-form";
import CustomerLocation from "@/components/customer-location";
import TextField from "@/components/TextField";
import { getCheckoutMutation } from "@/api/checkout/checkout-query";
import { toast } from "sonner";
import { checkoutResponse } from "@/api/checkout/type";
import { Dispatch, SetStateAction } from "react";

interface InvoiceDetailsType {
  onChange: VoidFunction;
  setData: Dispatch<SetStateAction<checkoutResponse | undefined>>;
}

const InvoiceDetails = ({ onChange, setData }: InvoiceDetailsType) => {
  const methods = useForm();
  const { data } = getCartQuery();
  const { mutate, isPending } = getCheckoutMutation();

  const onSubmit = (data: any) => {
    mutate(
      { ...data, isUrgent: false },
      {
        onSuccess: (data: checkoutResponse) => {
          console.log(data);

          setData(data);
          onChange();
        },
        onError: () => {
          toast(t("form.form_error"));
        },
      }
    );
  };

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col">
        <Title text={"invoice.invoice_details"} />

        <CustomerLocation />

        <p className="text-4xl font-bold">{t("invoice.order_summary")}</p>

        <div className="my-4 text-lg font-semibold px-4 md:px-12 lg:px-20">
          {t("cart.cart_content")}
        </div>

        <div className="flex flex-col gap-4 px-4 md:px-12 lg:px-20">
          {data?.data.cart.map((item) => (
            <CartItem
              key={item._id}
              id={item._id}
              title={item.product?.title}
              notes={item.notes}
              size={item.size}
              price={item.price}
              quantity={item.quantity}
              onQuantityChange={(_quantity) => {}}
            />
          ))}
        </div>

        <div className="px-4 md:px-12 lg:px-20 mt-8">
          <div className="flex justify-between items-start mb-8 max-sm:flex-col max-sm:gap-6">
            {/* <CouponInput /> */}
            <TextField
              control={methods.control}
              name="couponCode"
              label="order.got_coupon"
            />
          </div>

          <div className="flex justify-end gap-8 ">
            <Button
              type="button"
              disabled={isPending}
              variant="secondary"
              className="w-fit px-8 font-bold mb-10"
              onClick={() => {
                onSubmit(methods.watch());
              }}
            >
              {t("form.order")}
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default InvoiceDetails;
