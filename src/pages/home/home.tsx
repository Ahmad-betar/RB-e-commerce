import { Header } from "@/layout/header";
import { CategoryCard } from "@/components/category-card";
import { ProductCard } from "@/components/product-card";

export default function Home() {
  const categories = [
    { title: "عبايات العمل", subtitle: "العملية" },
    { title: "عبايات التطريز", subtitle: "التطريز" },
    { title: "عبايات السادة", subtitle: "السادة" },
    { title: "داخلية العبايات", subtitle: "العبايات" },
    { title: "عبايات المناسبات", subtitle: "المناسبات" },
    { title: "عبايات الشبك", subtitle: "الشبك" },
  ];

  const products = Array(8).fill({
    title: "عباية بيضاء",
    price: 60,
    imageUrl: "/placeholder.svg?height=400&width=400",
  });

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <div className="relative mx-auto max-w-2xl">
            <img
              src="/placeholder.svg?height=600&width=400"
              alt="Featured Abaya"
              width={400}
              height={600}
              className="mx-auto"
            />
          </div>
          <h1 className="mt-6 text-3xl font-bold">
            أكثر من مجرد <span className="text-gray-400">عباية</span>
          </h1>
        </section>

        {/* Categories Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-center text-2xl font-bold">التصنيفات</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          <div className="mb-8 flex justify-between">
            <h2 className="text-xl font-bold">رائج الآن</h2>
            <div className="space-x-4 space-x-reverse">
              <button className="text-sm font-medium">الأحدث</button>
              <button className="text-sm font-medium">الأكثر مبيعاً</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <h3 className="mb-4 font-semibold">طرق الدفع</h3>
              <div className="flex gap-2">
                <div className="h-8 w-12 rounded bg-gray-200" />
                <div className="h-8 w-12 rounded bg-gray-200" />
                <div className="h-8 w-12 rounded bg-gray-200" />
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">وسائل التواصل</h3>
              <div className="flex gap-4">
                <div className="h-6 w-6 rounded-full bg-gray-200" />
                <div className="h-6 w-6 rounded-full bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
