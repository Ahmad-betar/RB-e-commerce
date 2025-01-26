import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-[#E6DED7] p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-4">
          <button aria-label="Search">
            <Search className="h-6 w-6" />
          </button>
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white">
              0
            </span>
          </Link>
          <button aria-label="User account">
            <User className="h-6 w-6" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium">التصنيفات</button>
          <Link to="/" className="text-sm font-medium">
            الرئيسية
          </Link>
        </div>
        <Link to="/" className="text-2xl font-bold">
          RB
        </Link>
      </div>
    </header>
  );
}
