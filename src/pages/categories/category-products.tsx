import { getProductsQuery } from "@/api/product/product-query";
import { ProductCard } from "@/components/product-card";
import RHFSelect from "@/components/rhf-select";
import Title from "@/components/title";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const Categories = () => {
  const { id } = useParams();
  const { control, watch } = useForm();
  const { data } = getProductsQuery({ productType: id!, sort: watch("sort") });

  return (
    <>
      <Header />

      <div className="flex items-center gap-16">
        <Title text="categories.categories" />
        {/* 
        <p className="text-lg font-bold">
          عبايات <span className="text-secondary">التطريز</span>
        </p> */}
      </div>

      <div className="grid grid-cols-2 gap-0 justify-start px-5 flex-grow">
        <RHFSelect
          name="sort"
          control={control}
          className="w-32 md:w-60"
          items={[
            { label: "categories.asc", value: "name:asc" },
            { label: "categories.desc", value: "name:desc" },
          ]}
          label=""
          labelOnright
          placeholder="form.sort"
        />
      </div>

      <div className="grid grid-cols-2 py-10 px-5 md:px-20 gap-4 md:grid-cols-4 lg:grid-cols-6">
        {data?.data.map(
          ({ logo: { url }, _id, title, description, price }, index) => (
            <ProductCard
              key={index}
              id={_id}
              title={title}
              subtitle={description}
              price={price}
              imageUrl={url}
            />
          )
        )}
      </div>

      <Footer />
    </>
  );
};

export default Categories;
