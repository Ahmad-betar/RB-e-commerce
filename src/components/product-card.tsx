import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "./ui/card";

interface ProductCardProps {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  imageUrl: string;
}

export function ProductCard({
  id,
  title,
  subtitle,
  price,
  imageUrl,
}: ProductCardProps) {
  return (
    <Link to={"/product/" + id}>
      <Card className="rounded-none p-0 border-none">
        <CardContent className="p-0 h-40">
          <div className="relative h-full w-full">
            <img
              className="object-cover w-full h-full rounded-md"
              src={imageUrl}
              alt={title} // Always add an alt attribute for accessibility
            />
            {/* Uncomment if you want to show a discount badge */}
            {/* <div className="absolute left-2 top-2 rounded-lg bg-red-500 px-2 py-1 text-xs text-white">
        25% -
      </div> */}
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-2 justify-between items-center p-4">
          <h3 className="text-lg font-light">{title}</h3>

          {/* Subtitle with ellipsis */}
          <p className="font-light text-sm text-gray-600 truncate w-full text-center">
            {subtitle}
          </p>

          <p className="font-bold text-sm text-gray-600">{price}</p>

          {/* Uncomment if you want to add a button */}
          {/* <Link
      to="/item-1"
      className={buttonVariants({ className: "rounded-none" })}
    >
      {t("item.get_item")}
    </Link> */}
        </CardFooter>
      </Card>
    </Link>
  );
}
