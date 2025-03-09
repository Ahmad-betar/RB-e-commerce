import { getProductsTypeQuery } from "@/api/product-type/product-type-query";
import { CategoryCard } from "@/components/category-card";
import LoadingSpinner from "@/components/ui/loading";
import Footer from "@/layout/footer";
import Header from "@/layout/header";

const Categories = () => {
  const { data, isLoading } = getProductsTypeQuery();

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Header />

      <section className="my-12 px-8 md:px-20">
        <h2 className="mb-6 text-center text-2xl font-bold">التصنيفات</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {data?.productTypes.map(({ _id, name }, index) => (
            <CategoryCard key={index} id={_id} title={name} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Categories;
