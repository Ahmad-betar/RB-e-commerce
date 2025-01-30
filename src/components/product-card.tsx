import { Link } from "react-router-dom";
import homeimage2 from "@/assets/to-delete/home-image2.jpg";
import { Card, CardContent, CardFooter } from "./ui/card";
import { buttonVariants } from "./ui/button";
import { t } from "i18next";

interface ProductCardProps {
  title: string;
  subtitle: string;
  price: number;
  imageUrl: string;
}

export function ProductCard({ title, price }: ProductCardProps) {
  return (
    <Card className="rounded-none p-0 border-none">
      <CardContent className="p-0">
        <div className="relative">
          <img className="w-full h-full" src={homeimage2} />

          <div className="absolute left-2 top-2 rounded-lg bg-red-500 px-2 py-1 text-xs text-white">
            25% -
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-4 justify-between items-center p-4">
        <h3 className="text-lg font-bold">{title}</h3>

        <p className="font-bold text-sm text-gray-600">{price} د.ك</p>

        <Link
          to="/item-1"
          className={buttonVariants({ className: "rounded-none" })}
        >
          {t("item.get_item")}
        </Link>
      </CardFooter>
    </Card>
  );
}
