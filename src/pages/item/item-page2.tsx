import Footer from "@/layout/footer";
import Header from "@/layout/header";
import hijab from "@/assets/hijab.svg";
import image from "@/assets/to-delete/home-image3.png";
import { Badge } from "@/components/ui/badge";
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

      <div className="grid grid-cols-3 items-start gap-8 my-10">
        <p></p>

        <img src={image} alt="" />

        <Badge className="w-fit px-2 py-1 mx-auto rounded-sm bg-red-900 text-white hover:bg-red-900">
          <img className="w-4" src={hijab} alt="" />
          {" `"}
          {" " + t("item.with_freefile") + " "}
        </Badge>
      </div>

      <Title text="item.offers_collections" />

      <div className="flex flex-col justify-end items-end w-full px-20">
        <p className="text-lg">70 د ك</p>
        <p className="text-3xl text-secondary">70 د ك</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 my-10 px-20">
        <ChooseCard label="item.choose_one" />
        <ChooseCard label="item.choose_two" />
        <ChooseCard label="item.choose_three" />
      </div>

      <div className="flex justify-center my-10">
        <Button className="font-bold">{t("form.add_to_cart")}</Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-6 px-20">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default ItemPage2;
