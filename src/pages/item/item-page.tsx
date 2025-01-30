import Footer from "@/layout/footer";
import Header from "@/layout/header";
import image from "@/assets/to-delete/home image.png";
import { Badge } from "@/components/ui/badge";
import { t } from "i18next";
import Title from "@/components/title";
import RHFSelect from "@/components/rhf-select";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import hijab from "@/assets/hijab-badge.svg";
import RHFCarousel from "@/components/rhf-carousel";
import RHFTextarea from "@/components/rhf-textarea";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import logo from "@/assets/logo.svg";
import { Label } from "@/components/ui/label";

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
        <img src={image} className="max-md:h-[60vh]" />

        <div className="flex flex-col gap-2 w-fit absolute -left-14 md:-left-20 top-10">
          <img className="w-28" src={hijab} alt="" />

          <Badge className="bg-red-500 self-end rounded-sm w-fit">25% -</Badge>
        </div>
      </div>

      <RHFCarousel
        card
        items={[image, image, image, image, image, image, image, image, image]}
        className="my-5"
        itemClassName="basis-1/2 md:basis-1/2 lg:basis-1/4 h-32"
      />

      <Title text="item.classic_abaya" />

      <div className="flex justify-between px-5 md:px-20">
        <h2 className="text-xl md:text-4xl font-semibold">
          {t("item.abaya_gold")}
        </h2>

        <div className="flex flex-col">
          <p className="text-lg">70 د ك</p>
          <p className="text-3xl text-secondary">70 د ك</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-20 my-5">
        <RHFSelect
          items={[]}
          labelOnright
          label="item.size"
          placeholder={t("form.enter_obj", { obj: t("item.size") })}
        />

        <RHFSelect
          items={[]}
          labelOnright
          label="item.abaya_type"
          placeholder={t("form.enter_obj", { obj: t("item.abaya_type") })}
        />

        <RHFTextarea label="item.notes" labelOnRight />
      </div>

      <div className="flex items-center gap-4 mr-1 px-5 md:px-20 my-5">
        <Label className="font-bold">Logo :</Label>

        <Tabs defaultValue="account">
          <TabsList className="flex gap-2">
            <TabsTrigger
              className="p-0 w-10 h-10 rounded-full border data-[state=active]:border-black"
              value="account"
            >
              <img src={logo} alt="" />
            </TabsTrigger>
            <TabsTrigger
              className="p-0 w-10 h-10 rounded-full border data-[state=active]:border-black"
              value="password"
            >
              <img src={logo} alt="" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* <div className="flex justify-around px-5 md:px-20">
        <div>
          <p className="text-lg md:text-2xl font-bold">{t("item.details")} :</p>
          <ul>
            <li>اللون الاسود</li>
            <li>اللون الاسود</li>
            <li>اللون الاسود</li>
            <li>اللون الاسود</li>
          </ul>
        </div>

        <div className="">
          <p className="text-lg md:text-2xl font-bold">{t("item.notes")} :</p>
          <p className="">اريده مطرز فضي مع اكمام عريضة</p>
        </div>
      </div> */}

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
