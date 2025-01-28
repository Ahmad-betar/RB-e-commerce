import { CategoryCard } from "@/components/category-card";
import { ProductCard } from "@/components/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image from "@/assets/to-delete/home image.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TextField from "@/components/TextField";
import Header from "@/layout/header";
import Footer from "@/layout/footer";

export default function Home() {
  const categories = [
    { title: "عبايات", subtitle: "العملية" },
    { title: "عبايات", subtitle: "التطريز" },
    { title: "عبايات", subtitle: "السادة" },
    { title: "داخلية", subtitle: "العبايات" },
    { title: "عبايات", subtitle: "المناسبات" },
    { title: "عبايات", subtitle: "الشبك" },
  ];

  const products = Array(8).fill({
    title: "عباية بيضاء",
    price: 60,
    imageUrl: "/placeholder.svg?height=400&width=400",
  });

  return (
    <div className="">
      <Header />

      <main className="container mx-auto px-5 md:px-20 py-8">
        {/* Hero Section */}

        <section className=" flex flex-col justify-center items-center mb-32 text-center">
          <Carousel className="w-full " opts={{ direction: "rtl" }}>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="mx-auto max-w-4xl">
                    <img src={image} className="mx-auto" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>

          <h1 className="mt-6 text-3xl font-bold">
            أكثر من مجرد <span className="text-secondary">عباية</span>
          </h1>
        </section>

        {/* Categories Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-center text-2xl font-bold">التصنيفات</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                subtitle={category.subtitle}
              />
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section>
          <Tabs defaultValue="popular" className="w-full">
            <TabsList className="w-full my-4">
              <TabsTrigger value="popular">رائج الآن</TabsTrigger>
              <TabsTrigger value="newest">الأحدث</TabsTrigger>
              <TabsTrigger value="most-sell">الأكثر مبيعا</TabsTrigger>
            </TabsList>

            <TabsContent value="popular">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="newest">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="most-sell">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  );
}
