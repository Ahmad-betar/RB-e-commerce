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

      <div className="grid grid-cols-2 gap-0 justify-start px-5 flex-grow">
        <RHFSelect
          className="w-32 md:w-60"
          items={[]}
          label=""
          labelOnright
          placeholder="form.sort"
        />

        <RHFSelect
          className="w-32 md:w-60"
          items={[]}
          label=""
          labelOnright
          placeholder="form.filter"
        />
      </div>

      <div className="grid grid-cols-2 py-10 px-5 md:px-20 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Categories;
