import Footer from "@/layout/footer";
import Header from "@/layout/header";
import hijab from "@/assets/hijab-badge.svg";
import image from "@/assets/to-delete/home-image3.png";
import { t } from "i18next";
import Title from "@/components/title";
import ChooseCard from "./choose-card";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";

const ItemPage2 = () => {
  const products = Array(8).fill({
    title: "عباية بيضاء",
    price: 60,
    imageUrl: "/placeholder.svg?height=400&width=400",
  });
  return (
    <>
      <Header />

      <div className="grid grid-cols-5 grid-rows-1 items-start my-10">
        <img
          className="col-span-4 h-auto w-auto md:w-auto md:h-screen md:col-start-2 md:col-span-3"
          src={image}
          alt=""
        />
        <img className="col-span-1 w-28 mt-10" src={hijab} alt="" />
      </div>

      <Title text="item.offers_collections" />

      <div className="flex flex-col justify-end items-end w-full px-5 md:px-20">
        <p className="text-lg relative">
          70 د ك
          <p className="absolute w-16 h-0.5 rounded-md bg-red-800 -rotate-12 bottom-3 -left-0"></p>
        </p>
        <p className="text-3xl text-secondary">70 د ك</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 my-10 px-5 md:px-20">
        <ChooseCard label="item.choose_one" />
        <ChooseCard label="item.choose_two" />
        <ChooseCard label="item.choose_three" />
      </div>

      <div className="flex justify-center my-10">
        <Button className="font-bold">{t("form.add_to_cart")}</Button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 px-5 md:px-20">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default ItemPage2;
