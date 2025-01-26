import { Link } from "react-router-dom";
import curvyline from "@/assets/curvy-line.svg";
import logo from "@/assets/logo.svg";
interface CategoryCardProps {
  title: string;
  subtitle: string;
}

export function CategoryCard({ title, subtitle }: CategoryCardProps) {
  return (
    <Link to={`/category/${title}`} className="">
      <div className="rounded-xl border flex flex-col gap-4 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
        <img src={logo} className="mx-auto mb-4" />
        <img src={curvyline} alt="" />
        <h3 className="flex justify-center gap-1 text-lg font-semibold text-gray-900">
          {title}
          <p className="text-secondary">{subtitle}</p>
        </h3>
      </div>
    </Link>
  );
}
