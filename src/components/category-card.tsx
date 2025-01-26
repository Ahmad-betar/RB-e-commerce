import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  subtitle: string;
}

export function CategoryCard({ title, subtitle }: CategoryCardProps) {
  return (
    <Link to={`/category/${title}`} className="group relative block">
      <div className="overflow-hidden rounded-lg border bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
        <img
          src="/placeholder.svg"
          alt="RB Designer Logo"
          width={120}
          height={60}
          className="mx-auto mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </Link>
  );
}
