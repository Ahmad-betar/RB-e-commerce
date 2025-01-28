import CouponInput from "@/components/coupon-input";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import Header from "@/layout/header";
import { t } from "i18next";
import CartItem from "../cart/cart-item";
import { useState } from "react";
import Footer from "@/layout/footer";
import { Link } from "react-router-dom";
import UserInfoForm from "@/components/user-info-form";

const InvoiceDetails = () => {
  const [items, _setItems] = useState([
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

        <UserInfoForm />

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
            <Link to={"/invoice-payment"}>
              <Button
                variant="secondary"
                className="w-fit px-8 font-bold mb-10"
              >
                {t("form.complete_order")}
              </Button>
            </Link>
          </div>
        </div>
      </form>

      <Footer />
    </>
  );
};

export default InvoiceDetails;
