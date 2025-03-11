import Footer from "@/layout/footer";
import Header from "@/layout/header";
import hijab from "@/assets/hijab-badge.svg";
import image from "@/assets/to-delete/home-image3.png";
import { t } from "i18next";
import Title from "@/components/title";
import ChooseCard from "./choose-card";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { FormProvider, useForm } from "react-hook-form";
import { usePopularsQuery } from "@/api/popular/popular-query";

const ItemPage2 = () => {
  const methods = useForm();
  const { data: popular } = usePopularsQuery();

  return (
    <FormProvider {...methods}>
      <Header />

      <div className="items-start mt-10 w-full">
        <div className="relative w-fit mx-auto">
          <img className="h-80" src={image} alt="" />
          <img className="absolute -top-5 -left-10 w-28" src={hijab} alt="" />
        </div>
      </div>

      <Title text="item.offers_collections" />

      <div className="flex flex-col justify-end items-end w-full px-5 md:px-20">
        <p className="text-lg relative">
          70 د ك
          <p className="absolute w-16 h-0.5 rounded-md bg-red-800 -rotate-12 bottom-3 -left-0"></p>
        </p>
        <p className="text-3xl text-secondary">70 د ك</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4 px-5 md:px-20">
        <ChooseCard label="item.choose_one" />
        <ChooseCard label="item.choose_two" />
        <ChooseCard label="item.choose_three" />
      </div>

      <div className="flex justify-center my-10">
        <Button className="font-bold">{t("form.add_to_cart")}</Button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 px-5 md:px-20">
        {popular?.populars.map(
          ({ product: { _id, images, price, title } }, index) => (
            <ProductCard
              key={index}
              id={_id}
              imageUrl={images[0].url}
              price={price}
              title={title}
              subtitle=""
            />
          )
        )}
      </div>

      <Footer />
    </FormProvider>
  );
};

export default ItemPage2;
