import Footer from "@/layout/footer";
import Header from "@/layout/header";
import image from "@/assets/to-delete/home image.png";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { t } from "i18next";
import Title from "@/components/title";
import RHFSelect from "@/components/rhf-select";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import hijab from "@/assets/hijab-badge.svg";

const ItemPage = () => {
  const products = Array(8).fill({
    title: "عباية بيضاء",
    price: 60,
    imageUrl: "/placeholder.svg?height=400&width=400",
  });

  return (
    <>
      <Header />

      {/* Item Page Content */}
      <div className="grid grid-cols-5 items-start gap-0 md:gap-x-8 p-5 md:p-20">
        {/* Left column with scrollable images */}
        <div className="grid col-span-1 gap-4 h-full overflow-y-auto">
          {new Array(5).fill(0).map((_, index) => (
            <Card className="w-fit">
              <CardContent className="p-1">
                <img key={index} src={image} className="h-auto w-20" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid col-span-4 grid-cols-3 relative">
          {/* Center column */}
          <img src={image} className="col-span-3" />

          {/* Right column */}
          <div className="flex flex-col gap-2 w-fit absolute -left-0">
            <img className="w-28" src={hijab} alt="" />

            <Badge className="bg-red-500 self-end rounded-sm w-fit">
              25% -
            </Badge>
          </div>
        </div>
      </div>

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-20 my-10">
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
      </div>

      <div className="flex justify-around px-5 md:px-20">
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
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-4 justify-around px-5 md:px-20 my-20">
        <Button>{t("form.add_to_cart")}</Button>

        <div className="flex justify-between gap-4">
          <p className="text-xl text-gray-600">{t("item.count")} : </p>
          <Button variant="outline">+</Button>
          <span className="underline text-secondary text-xl font-bold">1</span>
          <Button variant="outline">-</Button>
        </div>
      </div>

      <p className="mx-auto text-center text-2xl my-10">{t("home.popular")}</p>

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
