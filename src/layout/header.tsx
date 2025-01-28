import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import home from "@/assets/home.svg";
import categories from "@/assets/categories.svg";
import instagram from "@/assets/instagram.svg";
import { t } from "i18next";
import Sidebar from "./side-bar";

function Header() {
  return (
    <header className="flex flex-col bg-[#E6DED7] px-4 pt-2 w-full">
      <div className="flex items-center justify-between w-full shadow-sm">
        <div className="flex md:hidden items-center gap-4">
          <Sidebar />

          <img src={instagram} className="w-10" alt="" />
        </div>

        <Link to="/" className="text-2xl px-6 md:border-l-2 md:border-l-black">
          <img src={logo} alt="" />
        </Link>

        <div className="hidden md:flex items-center gap-40">
          <Link to="/" className=" flex gap-2 text-lg font-bold">
            <img src={home} alt="" />
            {t("menu.main")}
          </Link>

          <Link to="/categories" className="flex gap-2 text-lg font-bold">
            <img className="" src={categories} alt="" />
            {t("menu.categories")}
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
          <Link
            to={"/account-info"}
            className="hidden md:flex"
            aria-label="User account"
          >
            <User className="h-6 w-6" />
          </Link>
        </div>
      </div>

      <span className="h-8 flex items-center text-white">
        عبايات جديدة ومنوعة وجودة عالية
      </span>
    </header>
  );
}

export default Header;
