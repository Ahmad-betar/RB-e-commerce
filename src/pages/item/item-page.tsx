import Footer from "@/layout/footer";
import Header from "@/layout/header";
import { Badge } from "@/components/ui/badge";
import { t } from "i18next";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import hijab from "@/assets/hijab-badge.svg";
import RHFCarousel from "@/components/rhf-carousel";
import RHFTextarea from "@/components/rhf-textarea";
import RhfTab from "@/components/rhf-tabs";
import RhfDialog from "@/components/rhf-dialog";
import sizes from "@/assets/sizes.jpg";
import { useParams } from "react-router-dom";
import { getOneProductsQuery } from "@/api/product/product-query";
import LoadingSpinner from "@/components/ui/loading";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { addToCart } from "@/api/cart/type";
import { addToCartQuery } from "@/api/cart/cart-query";
import { toast } from "sonner";
import { usePopularsQuery } from "@/api/popular/popular-query";

const ProductPage = () => {
  const { id } = useParams();
  const [img, setimg] = useState("");
  const { mutate, isPending } = addToCartQuery();
  const methods = useForm<addToCart>({
    defaultValues: { quantity: 0, selectedAttributes: {} },
  });
  const quantity = methods.watch("quantity");
  const { data, isLoading } = getOneProductsQuery(id!);
  const { data: popular } = usePopularsQuery();

  const onSubmit = (data: addToCart) => {
    mutate(
      { ...data, productId: id! },
      {
        onSuccess() {
          methods.reset();
          toast(t("cart.added_to_cart"));
        },
        onError: () => {
          toast(t("form.form_error"));
        },
      }
    );
  };

  useEffect(() => {
    setimg(data?.data.logo.url ?? "");
  }, [data]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Header />

        <div className="flex justify-center mx-auto w-fit relative mt-8">
          <img src={img} className="h-[30vh] w-full object-cover rounded-sm" />

          {/* <div className="flex flex-col gap-2 w-fit opacity-90 absolute -left-20 -top-5">
            <img className="w-28" src={hijab} alt="" />

            <Badge className="bg-red-500 self-end rounded-sm w-fit">
              25% -
            </Badge>
          </div> */}
        </div>

        <RHFCarousel
          card
          withPreview={(img) => {
            setimg(img);
          }}
          items={
            data?.data.images
              .map((image) => image.url)
              .concat(data.data.logo.url)!
          }
          vidoes={data?.data.videos.map((video) => video.url)}
          className="my-5 px-8"
          itemClassName="basis-1/3 md:basis-1/6 lg:basis-1/12 h-16"
        />

        <Title text="item.classic_abaya" />

        <div className="flex justify-between px-5 md:px-20">
          <h2 className="text-xl md:text-4xl font-semibold">
            {data?.data.title}
          </h2>

          <div className="flex flex-col">
            <p className="text-lg">{data?.data.price} د ك</p>
          </div>

          <RhfDialog
            trigger={<img className="w-10 h-10 rounded-md" src={sizes} />}
            content={<img src={sizes} />}
          />
        </div>

        <h6 className="px-5 md:px-20 text-sm">{data?.data.description}</h6>

        <div className="grid grid-cols-1 gap-4 px-5 md:px-10 my-4">
          <div className="flex flex-col gap-2">
            {data?.data.attributes.map(({ name, options, required }) => (
              <RhfTab
                required={required}
                name={"selectedAttributes." + name}
                images={false}
                label={name}
                elements={options}
              />
            ))}
          </div>

          <RhfTab
            required
            name="size"
            images={false}
            label="item.size"
            elements={data?.data.availableSizes!}
          />

          <p className="text-xs">{data?.data.notes}</p>
          <RHFTextarea name="notes" label="item.notes" />
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-around px-5 md:px-20 my-5">
          <div className="flex justify-between gap-4">
            <p className="text-xl text-gray-600">{t("item.count")} : </p>
            <Button
              type="button"
              variant="outline"
              onClick={() => methods.setValue("quantity", quantity + 1)}
            >
              +
            </Button>

            <span className="underline text-secondary text-xl font-bold">
              {quantity}
            </span>

            <Button
              variant="outline"
              type="button"
              onClick={() =>
                quantity > 0
                  ? methods.setValue("quantity", quantity - 1)
                  : undefined
              }
            >
              -
            </Button>
          </div>

          <Button type="submit" disabled={quantity === 0 || isPending}>
            {t("form.add_to_cart")}
          </Button>
        </div>

        <p className="mx-auto text-center text-2xl my-5">{t("home.popular")}</p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 px-5 md:px-20">
          {popular?.populars.map(({ product: { _id, images, price, title } }, index) => (
            <ProductCard
              key={index}
              id={_id}
              imageUrl={images[0].url}
              price={price}
              title={title}
              subtitle=""
            />
          ))}
        </div>

        <Footer />
      </form>
    </FormProvider>
  );
};

export default ProductPage;
