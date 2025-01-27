import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import CartItem from "./cart-item";
import Title from "@/components/title";
import CouponInput from "@/components/coupon-input";

const Cart = () => {
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

  const updateQuantity = (id: number, quantity: number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <main className="py-8">
        <Title text="cart.cart" />

        <div className="mb-4 text-lg font-semibold px-4 md:px-12 lg:px-20">
          محتويات السلة:
        </div>

        <div className="flex flex-col gap-4 px-4 md:px-12 lg:px-20">
          {items.map((item) => (
            <CartItem
              key={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              onQuantityChange={(quantity) => updateQuantity(item.id, quantity)}
              onDelete={() => deleteItem(item.id)}
            />
          ))}
        </div>

        <div className="px-4 md:px-12 lg:px-20 mt-8">
          <div className="flex justify-between items-end mb-8 max-sm:flex-col max-sm:gap-6">
            <CouponInput />

            <div className="flex items-center justify-between gap-10 text-xl font-bold">
              <span>المجموع الكلي:</span>
              <span>{total.toFixed(2)} د.ك</span>
            </div>
          </div>

          <div className="flex justify-end gap-8 ">
            <Button variant="secondary" className="w-40">
              الدفع
            </Button>

            <Button variant="outline" className="w-40">
              متابعة التسوق
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
