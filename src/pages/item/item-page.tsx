import Footer from "@/layout/footer";
import Header from "@/layout/header";
import image from "@/assets/to-delete/home image.png";
import { Badge } from "@/components/ui/badge";
import { t } from "i18next";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import hijab from "@/assets/hijab-badge.svg";
import RHFCarousel from "@/components/rhf-carousel";
import RHFTextarea from "@/components/rhf-textarea";
import logo from "@/assets/logo.svg";
import RhfTab from "@/components/rhf-tabs";
import RhfDialog from "@/components/rhf-dialog";
import sizes from "@/assets/sizes.jpg";

const ItemPage = () => {
  const products = Array(8).fill({
    title: "عباية بيضاء",
    price: 60,
    imageUrl: "/placeholder.svg?height=400&width=400",
  });

  return (
    <>
      <Header />

      <div className="flex justify-center mx-auto w-fit relative">
        <img src={image} className="h-[60vh]" />

        <div className="flex flex-col gap-2 w-fit absolute -left-4 md:-left-20 top-10">
          <img className="w-28" src={hijab} alt="" />

          <Badge className="bg-red-500 self-end rounded-sm w-fit">25% -</Badge>
        </div>
      </div>

      <RHFCarousel
        card
        items={[image, image, image, image, image, image, image, image, image]}
        className="my-5"
        itemClassName="basis-1/6 md:basis-1/12 lg:basis-1/12 h-fit"
      />

      <Title text="item.classic_abaya" />

      <div className="flex justify-between px-5 md:px-20 basis-1/">
        <h2 className="text-xl md:text-4xl font-semibold">
          {t("item.abaya_gold")}
        </h2>

        <div className="flex flex-col">
          <p className="text-lg">70 د ك</p>
          <p className="text-3xl text-secondary">70 د ك</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 px-5 md:px-10 my-4">
        {/* <RHFSelect
          items={[]}
          labelOnright
          label="item.size"
          placeholder={t("form.enter_obj", { obj: t("item.size") })}
        /> */}

        {/* <RHFSelect
          items={[]}
          labelOnright
          label="item.abaya_type"
          placeholder={t("form.enter_obj", { obj: t("item.abaya_type") })}
        /> */}

        <div className="flex gap-2">
          <RhfTab
            images={false}
            label="item.size"
            elements={["16", "17", "18", "19", "20", "21", "22", "23"]}
          />

          <RhfDialog
            trigger={<img className="w-10 h-10 rounded-md" src={sizes} />}
            content={<img src={sizes} />}
          />
        </div>

        <RhfTab
          images={false}
          label="item.abaya_type"
          elements={["12", "13", "16", "15"]}
        />

        <RhfTab images label="item.logo" elements={[logo, logo, logo]} />

        <p className="text-xs">
          اذا كان القياس XL فـ اكثر الرجاء الكتابه في الملاحظات
        </p>
        <RHFTextarea  label="item.notes" />
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-4 justify-around px-5 md:px-20 my-5">
        <Button>{t("form.add_to_cart")}</Button>

        <div className="flex justify-between gap-4">
          <p className="text-xl text-gray-600">{t("item.count")} : </p>
          <Button variant="outline">+</Button>
          <span className="underline text-secondary text-xl font-bold">1</span>
          <Button variant="outline">-</Button>
        </div>
      </div>

      <p className="mx-auto text-center text-2xl my-5">{t("home.popular")}</p>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 px-5 md:px-20">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default ItemPage;
