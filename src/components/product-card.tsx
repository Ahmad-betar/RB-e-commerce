import { Link } from "react-router-dom";

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
}

export function ProductCard({ title, price, imageUrl }: ProductCardProps) {
  return (
    <Link to="#" className="group block">
      <div className="overflow-hidden rounded-lg border bg-white">
        <div className="relative aspect-square">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs text-white">
            جديد
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-right text-sm font-medium">{title}</h3>
          <p className="text-right text-sm text-gray-600">{price} د.ك</p>
        </div>
      </div>
    </Link>
  );
}
