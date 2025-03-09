import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import logo from "@/assets/logo.svg";
interface CategoryCardProps {
  title: string;
  id: string;
}

export function CategoryCard({ title, id }: CategoryCardProps) {
  return (
    <Link to={`/categories/` + id} className="">
      <Card className="p-2 shadow-none border bg-secondary">
        <CardContent className="flex flex-col items-center p-0">
          <img src={logo} className="mb-4" />

          <h3 className="font-bold">{title}</h3>
        </CardContent>
      </Card>
    </Link>
  );
}
