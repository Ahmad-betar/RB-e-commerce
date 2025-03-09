import { buttonVariants } from "@/components/ui/button";
import CartItem from "./cart-item";
import Title from "@/components/title";
// import CouponInput from "@/components/coupon-input";
import { Link } from "react-router-dom";
import { getCartQuery } from "@/api/cart/cart-query";
import LoadingSpinner from "@/components/ui/loading";
import { t } from "i18next";

const Cart = () => {
  const { data, isLoading } = getCartQuery();

  const total = data?.data.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <main className="py-8">
        <Title text="cart.cart" />

        <div className="mb-4 text-lg font-semibold px-4 md:px-12 lg:px-20">
          {t("cart.cart_content")}
        </div>

        <div className="flex flex-col gap-4 px-4 md:px-12 lg:px-20">
          {data?.data.cart.map((item) => (
            <CartItem
              key={item._id}
              id={item._id}
              title={item.product.title}
              notes={item.notes}
              size={item.size}
              price={item.price}
              quantity={item.quantity}
              onQuantityChange={(_quantity) => {}}
            />
          ))}
        </div>

        <div className="px-4 md:px-12 lg:px-20 mt-8">
          <div className="flex justify-between items-end mb-8 max-sm:flex-col max-sm:gap-6">
            {/* <CouponInput /> */}

            <div className="flex items-center justify-between gap-10 text-xl font-bold">
              <span>{t("form.total")}</span>
              <span>{total?.toFixed(2)} د.ك</span>
            </div>
          </div>

          <div className="flex justify-end gap-8 ">
            <Link
              to={"/invoice-details"}
              className={buttonVariants({
                variant: "secondary",
                className: "w-40",
              })}
            >
              {t("form.payment")}
            </Link>

            <Link
              to={"/"}
              className={buttonVariants({
                variant: "outline",
                className: "w-40",
              })}
            >
              {t("cart.shopping")}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
