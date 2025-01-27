import CouponInput from "@/components/coupon-input";
import RHFSelect from "@/components/rhf-select";
import RHFTextarea from "@/components/rhf-textarea";
import TextField from "@/components/TextField";
import Title from "@/components/title";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/layout/header";
import { t } from "i18next";
import CartItem from "../cart/cart-item";
import { useState } from "react";
import Footer from "@/layout/footer";

const InvoiceDetails = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "عباية تطريز ذهبي - 50 - مطرز",
      price: 70,
      quantity: 1,
    },
    {
      id: 2,
      title: "عباية تطريز ذهبي - 50 - مطرز",
      price: 70,
      quantity: 1,
    },
    {
      id: 3,
      title: "عباية تطريز ذهبي - 50 - مطرز",
      price: 70,
      quantity: 1,
    },
  ]);

  return (
    <>
      <Header />

      <form className="flex flex-col">
        <Title text={"invoice.invoice_details"} />

        <div className="grid grid-cols-3 gap-8 px-20">
          <TextField
            label="create_account.enter_name"
            placeholder="create_account.enter_name"
          />
          <TextField
            label="create_account.email"
            placeholder="create_account.enter_email"
          />
          <div className="flex justify-between items-end gap-4">
            <TextField
              label="create_account.phone_number"
              placeholder="create_account.enter_phone_number"
            />

            <Badge variant={"outline"} className="h-9 py-0 mr-2">
              KW +986
            </Badge>
          </div>
        </div>

        <p className="text-4xl font-bold mt-8 mb-20 px-4">
          {t("create_account.address")}
        </p>

        {/* Address info */}
        <div className="grid grid-cols-3 gap-10 justify-between px-20 mb-10">
          <RHFSelect
            placeholder={t("form.enter_obj", {
              obj: t("create_account.country"),
            })}
            items={[]}
            label="create_account.country"
          />
          <RHFSelect
            placeholder={t("form.enter_obj", {
              obj: t("create_account.governorate"),
            })}
            items={[]}
            label="create_account.governorate"
          />
          <RHFSelect
            placeholder={t("form.enter_obj", {
              obj: t("create_account.region"),
            })}
            items={[]}
            label="create_account.region"
          />

          <TextField
            label="create_account.street"
            placeholder={t("form.enter_obj", {
              obj: t("create_account.street"),
            })}
          />
          <TextField
            label="create_account.Avenue"
            placeholder={t("form.enter_obj", {
              obj: t("create_account.Avenue"),
            })}
          />
          <TextField
            label="create_account.house"
            placeholder={t("form.enter_obj", {
              obj: t("create_account.house"),
            })}
          />
          <TextField
            label="create_account.floor"
            placeholder={t("form.enter_obj", {
              obj: t("create_account.floor"),
            })}
          />
          <TextField
            label="create_account.building"
            placeholder={t("form.enter_obj", {
              obj: t("create_account.building"),
            })}
          />
          <TextField
            label="create_account.apartment"
            placeholder={t("form.enter_obj", {
              obj: t("create_account.apartment"),
            })}
          />

          <RHFTextarea
            label="create_account.another_details"
            placeholder={t("form.enter_obj", {
              obj: t("create_account.another_details"),
            })}
          />
        </div>

        <p className="text-4xl font-bold">{t("invoice.order_summary")}</p>

        <div className="my-4 text-lg font-semibold px-4 md:px-12 lg:px-20">
          {t("cart.cart_content")}
        </div>

        <div className="flex flex-col gap-4 px-4 md:px-12 lg:px-20">
          {items.map((item) => (
            <CartItem
              key={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              onDelete={() => {}}
              onQuantityChange={() => {}}
            />
          ))}
        </div>

        <div className="px-4 md:px-12 lg:px-20 mt-8">
          <div className="flex justify-between items-start mb-8 max-sm:flex-col max-sm:gap-6">
            <CouponInput />

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-10">
                <span>{t("form.count")}</span>
                <span>50 د.ك</span>
              </div>
              <div className="flex items-center justify-between gap-10">
                <span>{t("form.product_discount")}</span>
                <span>50 د.ك</span>
              </div>
              <div className="flex items-center justify-between gap-10">
                <span>{t("form.deliviry_price")}</span>
                <span>50 د.ك</span>
              </div>
              <div className="flex items-center justify-between gap-10">
                <span>{t("form.discount")}</span>
                <span>50 د.ك</span>
              </div>
              <div className="flex items-center justify-between gap-10 font-bold">
                <span>{t("form.total")}</span>
                <span>50 د.ك</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-8 ">
            <Button variant="secondary" className="w-fit px-8 font-bold mb-10">
              {t("form.complete_order")}
            </Button>
          </div>
        </div>
      </form>

      <Footer />
    </>
  );
};

export default InvoiceDetails;
