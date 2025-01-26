import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import home from "@/assets/home.svg";
import categories from "@/assets/categories.svg";

function Header() {
  return (
    <header className="flex flex-col bg-[#E6DED7] px-4 pt-2 w-full">
      <div className="flex items-center justify-between w-full shadow-sm">
        <Link
          to="/"
          className="text-2xl font-bold px-6 border-l-2 border-l-black"
        >
          <img src={logo} alt="" />
        </Link>

        <div className="flex items-center gap-40">
          <Link to="/" className=" flex gap-1 text-lg font-bold">
            <img src={home} alt="" />
            الرئيسية
          </Link>

          <Link to="/" className="flex text-lg font-bold">
            <img className="" src={categories} alt="" />
            {/* التصنيفات */}
          </Link>
        </div>

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
      </div>

      <span className="h-8 flex items-center text-white">
        عبايات جديدة ومنوعة وجودة عالية
      </span>
    </header>
  );
}

export default Header;
