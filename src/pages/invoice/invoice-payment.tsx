import { useForm, Controller } from "react-hook-form";
import { useCreateOrderMutation } from "@/api/order/order-query";
import { checkoutResponse } from "@/api/checkout/type";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import paymentcard from "@/assets/payment-card.svg";
import { t } from "i18next";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

interface InvoicePaymentType {
  onChange: VoidFunction;
  data: checkoutResponse | undefined;
}

const InvoicePayment = ({ onChange, data }: InvoicePaymentType) => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const { mutate, isPending } = useCreateOrderMutation();

  const onSubmit = (payload: any) => {
    if (!data) return; 
    const { deliveryAddress, couponCode } = data;

    mutate(
      { ...payload, deliveryAddress, couponCode },
      {
        onSuccess(data) {
          console.log(data.orderId);

          navigate("/orders/" + data.orderId);
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center gap-6 my-8">
        {/* Payment Summary Card */}
        <Card className="w-full max-w-2xl">
          <CardHeader className="font-bold py-4 px-6 border-b">
            <span>{t("invoice.order_summary")}</span>
          </CardHeader>

          <CardContent className="p-6 space-y-4">
            <div className="flex justify-between">
              <Label className="text-sm text-gray-600">{t("form.total")}</Label>
              <Label className="text-sm font-semibold">
                {data?.totalProductPrice.toFixed(2)}
              </Label>
            </div>

            <div className="flex justify-between">
              <Label className="text-sm text-gray-600">
                {t("form.discount")}
              </Label>
              <Label className="text-sm font-semibold">
                {data?.discount.toFixed(2)}
              </Label>
            </div>

            <div className="flex justify-between">
              <Label className="text-sm text-gray-600">
                {t("form.deliviry_price")}
              </Label>
              <Label className="text-sm font-semibold">
                {data?.deliveryCost.toFixed(2)}
              </Label>
            </div>

            <Separator />

            <div className="flex justify-between">
              <Label className="text-sm font-bold">{t("form.total")}</Label>
              <Label className="text-sm font-bold">
                {data?.totalAmount.toFixed(2)}
              </Label>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods Card */}
        <Card className="w-full max-w-2xl">
          <CardHeader className="flex items-center gap-3 font-bold py-4 px-6 border-b">
            <img className="w-6 h-6" src={paymentcard} alt="Payment Icon" />
            <span>{t("form.payment_type")}</span>
          </CardHeader>

          <CardContent className="p-6">
            <Controller
              name="paymentMethodId"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="space-y-4"
                >
                  {data?.paymentDetails.Data.PaymentMethods.map(
                    ({
                      PaymentMethodId,
                      ImageUrl,
                      PaymentMethodAr,
                      PaymentMethodCode,
                    }) => (
                      <div
                        key={PaymentMethodId}
                        className="flex items-center gap-4 p-4 rounded-lg border hover:shadow-md transition-shadow"
                      >
                        <RadioGroupItem
                          value={String(PaymentMethodId)}
                          id={PaymentMethodCode}
                        />
                        <img
                          className="w-8 h-8 object-contain"
                          src={ImageUrl}
                          alt={PaymentMethodAr}
                        />
                        <Label
                          className="font-medium text-sm"
                          htmlFor={PaymentMethodCode}
                        >
                          {PaymentMethodAr}
                        </Label>
                      </div>
                    )
                  )}
                </RadioGroup>
              )}
            />
          </CardContent>
        </Card>

        <Button
          variant="secondary"
          className="w-fit px-8 font-bold"
          disabled={isPending}
        >
          {t("form.pay")}
        </Button>

        {/* Back Button */}
        <Button
          type="button"
          variant="outline"
          className="w-fit px-8 font-bold"
          onClick={onChange}
        >
          {t("form.back")}
        </Button>
      </div>
    </form>
  );
};

export default InvoicePayment;
