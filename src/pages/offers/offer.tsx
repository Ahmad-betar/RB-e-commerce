import { useParams } from "react-router-dom";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import hijab from "@/assets/hijab-badge.svg";
import image from "@/assets/to-delete/home-image3.png";
import { t } from "i18next";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { FormProvider, useForm } from "react-hook-form";
import { usePopularsQuery } from "@/api/popular/popular-query";
import ChooseCard from "../item/choose-card";
import LoadingSpinner from "@/components/ui/loading";
import { getOfferQuery } from "@/api/offer/offer-query";

const Offer = () => {
  const { id } = useParams();
  const methods = useForm();
  const { data: popular } = usePopularsQuery();
  const { data, isLoading } = getOfferQuery(id!);

  console.log(data);

  if (isLoading) return <LoadingSpinner />;

  return (
    <FormProvider {...methods}>
      <Header />

      <div className="items-start my-5 w-full">
        <img className="h-80 mx-auto rounded-sm" src={data?.data.image.url} alt="" />
      </div>

      <Title text="item.offers_collections" />

      <p className="px-5 md:px-20 font-thin text-sm mb-5">{data?.data.description}</p>

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

export default Offer;
