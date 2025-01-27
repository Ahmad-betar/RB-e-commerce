import { ProductCard } from "@/components/product-card";
import RHFSelect from "@/components/rhf-select";
import Title from "@/components/title";
import Footer from "@/layout/footer";
import Header from "@/layout/header";

const products = Array(16).fill({
  title: "عباية بيضاء",
  price: 60,
  imageUrl: "/placeholder.svg?height=400&width=400",
});

const Categories = () => {
  return (
    <>
      <Header />

      <div className="flex items-center gap-16">
        <Title text="categories.categories" />

        <p className="text-lg font-bold">
          عبايات <span className="text-secondary">التطريز</span>
        </p>
      </div>

      <div className="flex gap-10">
        <RHFSelect
          className="w-60"
          items={[]}
          label=""
          placeholder="form.sort"
        />

        <RHFSelect
          className="w-60"
          items={[]}
          label=""
          placeholder="form.filter"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 p-20">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Categories;
