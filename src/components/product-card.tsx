import { Link } from "react-router-dom";
import homeimage2 from "@/assets/to-delete/home-image2.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ProductCardProps {
  title: string;
  subtitle: string;
  price: number;
  imageUrl: string;
}

export function ProductCard({
  title,
  subtitle,
  price,
  imageUrl,
}: ProductCardProps) {
  return (
    <Link to="#" className="block">
      <Card className="bg-gray-100">
        <CardContent className="p-2">
          <div className="relative">
            <img className="w-full h-full rounded-md" src={homeimage2} />
            <div className="absolute left-2 top-2 rounded-lg bg-red-500 px-2 py-1 text-xs text-white">
              25% -
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-between items-center p-4">
          <span>
            <h3 className="text-lg font-bold">{title}</h3>
            <h3 className="text-sm font-light">تصميم خاص بنا</h3>
          </span>
          <p className="font-bold text-sm text-gray-600">{price} د.ك</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
