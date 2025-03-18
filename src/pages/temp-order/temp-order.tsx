import { tempOrderQuery } from "@/api/temp-order/temp-order-query";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/layout/header";
import { t } from "i18next";
import LoadingSpinner from "@/components/ui/loading";
import { FormProvider, useForm } from "react-hook-form";
import CustomerLocation from "@/components/customer-location";
import TextField from "@/components/TextField";
import { getCheckoutMutation } from "@/api/checkout/checkout-query";
import { checkoutResponse } from "@/api/checkout/type";
import { toast } from "sonner";
import { useState } from "react";
import InvoicePayment from "../invoice/invoice-payment";
import TempInvoicesPayment from "./temp-invoices-payment";

const TempOrder = () => {
  const { id } = useParams();
  const methods = useForm();
  const [data, setData] = useState<checkoutResponse>();
  const [Page, setPage] = useState(0);

  const { data: tempOrder, isLoading } = tempOrderQuery(id!);
  const { mutate, isPending } = getCheckoutMutation();

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const onSubmit = (data: any) => {
    mutate(
      { ...data, isUrgent: false },
      {
        onSuccess: (data: checkoutResponse) => {
          console.log(data);

          setData(data);
          setPage(1);
        },
        onError: () => {
          toast(t("form.form_error"));
        },
      }
    );
  };

  return (
    <FormProvider {...methods}>
      <Header />

      {isLoading && <LoadingSpinner />}

      {!isLoading && (
        <div className="p-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>{tempOrder?.order._id}</CardTitle>
                  <CardDescription>
                    {new Date(tempOrder?.order.createdAt!).toLocaleString()}
                  </CardDescription>
                </div>
                {/* <Badge variant={tempOrder?.order.isUrgent ? "destructive" : "default"}>
                {tempOrder?.order.isUrgent ? "Urgent" : "Normal"}
              </Badge> */}
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {t("temp_order.customer_phone")}
                    </p>
                    <p className="font-medium">
                      {tempOrder?.order.customerPhone}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {t("form.total")}
                    </p>
                    <p className="font-medium">{tempOrder?.order.totalPrice}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    {t("temp_order.products")}
                  </p>
                  {/* <Table className="">
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t("form.price")}</TableHead>
                        <TableHead>{t("item.size")}</TableHead>
                        <TableHead>{t("form.quantity")}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tempOrder?.order.products.map((product, index) => (
                        <TableRow key={index}>
                          <TableCell>{product.price}</TableCell>
                          <TableCell>{product.size}</TableCell>
                          <TableCell>{product.quantity}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table> */}

                  {tempOrder?.order.products.map((product) => (
                    <div
                      key={product._id}
                      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold">
                            {product.product.title}
                          </p>
                          <p className="text-sm text-gray-500">
                            {t("item.count")}: {product.quantity}
                          </p>
                          <p className="text-sm text-gray-500">
                            {t("form.deliviry_price")}:
                            {product.price.toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-500">
                            {t("item.size")}: {product.size}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            {t("form.total")}:
                            {(product.quantity * product.price).toFixed(2)}
                          </p>
                        </div>
                      </div>

                      {/* Product Notes */}
                      {product.notes && (
                        <p className="text-sm text-gray-500 mt-2">
                          {t("item.notes")}: {product.notes}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>

            {/* <CardFooter className="flex justify-end">
              <Button asChild>
                <a
                  href={tempOrder?.order.customerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Complete Order Process
                </a>
              </Button>
            </CardFooter> */}
          </Card>
        </div>
      )}

      <div>
        {Page === 0 && (
          <>
            <CustomerLocation />

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
          </>
        )}

        {Page === 1 && (
          <TempInvoicesPayment
            data={data}
            onChange={handlePageChange.bind(null, 0)}
          />
        )}
      </div>
    </FormProvider>
  );
};

export default TempOrder;
