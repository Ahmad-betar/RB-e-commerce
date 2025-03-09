import { CategoryCard } from "@/components/category-card";
import { ProductCard } from "@/components/product-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/layout/header";
import Footer from "@/layout/footer";
import RHFCarousel from "@/components/rhf-carousel";
import { getProductsTypeQuery } from "@/api/product-type/product-type-query";
import LoadingSpinner from "@/components/ui/loading";
import { getProductsQuery } from "@/api/product/product-query";
import { getBestSellerQuery } from "@/api/product/product-query";
import { getBannerQuery } from "@/api/banner/banner-query";
import { usePopularsQuery } from "@/api/popular/popular-query";

export default function Home() {
  const { data: banner } = getBannerQuery();
  const { data: bestSeller } = getBestSellerQuery();
  const { data: productTypes, isLoading: isProductTypes } =
    getProductsTypeQuery();

  const { data: popular } = usePopularsQuery();

  const { data: newProducts } = getProductsQuery({
    limit: 10,
    sort: "name:desc",
  });

  if (isProductTypes) return <LoadingSpinner />;

  return (
    <div className="">
      <Header />

      <main className="container mx-auto px-5 md:px-20 pb-8">
        <section className=" flex flex-col justify-center items-center my-4 text-center">
          <RHFCarousel
            className="h-[50vh] w-auto"
            itemClassName="h-full w-auto"
            imgClassName="h-[50vh] object-cover"
            items={banner?.images.map(({ url }) => url)!}
          />
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-center text-2xl font-bold">التصنيفات</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {productTypes?.productTypes.map(({ _id, name }, index) => (
              <CategoryCard key={index} id={_id} title={name} />
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
                {popular?.map(
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
            </TabsContent>

            <TabsContent value="newest">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {newProducts?.data.map(
                  ({ _id, title, price, description, logo }, index) => (
                    <ProductCard
                      key={index}
                      id={_id}
                      title={title}
                      subtitle={description}
                      imageUrl={logo.url}
                      price={price}
                    />
                  )
                )}
              </div>
            </TabsContent>

            <TabsContent value="most-sell">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {bestSeller?.bestSellers.map(
                  ({ image, name, price, productId }, index) => (
                    <ProductCard
                      key={index}
                      id={productId}
                      title={name}
                      subtitle=""
                      imageUrl={image.url}
                      price={price}
                    />
                  )
                )}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  );
}
