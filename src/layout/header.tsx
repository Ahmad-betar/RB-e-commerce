import { DollarSign, LogOut, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import home from "@/assets/home.svg";
import categories from "@/assets/categories.svg";
import instagram from "@/assets/instagram.svg";
import orders from "@/assets/my-orders.svg";
import { t } from "i18next";
import Sidebar from "./side-bar";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { getCartQuery } from "@/api/cart/cart-query";
import { useState } from "react";
import RhfDialog from "@/components/rhf-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

function Header() {
  const [Token, setToken] = useState<boolean>(!!localStorage.getItem("token"));
  const { data } = getCartQuery();

  return (
    <header className="flex flex-col bg-secondary px-4 pt-2 w-full">
      <div className="flex items-center justify-between w-full shadow-sm">
        <div className="flex md:hidden items-center gap-4">
          <Sidebar />

          <img src={instagram} className="w-5" />
        </div>

        <Link
          to="/"
          className="max-md:w-10 max-md:h-10 text-2xl md:px-6 md:border-l-2 md:border-l-black"
        >
          <img src={logo} alt="" />
        </Link>

        <div className="hidden md:flex w-full px-10 items-center justify-between">
          <Link to="/" className=" flex items-center gap-2 text-lg font-bold">
            <img src={home} alt="" />
            {t("menu.main")}
          </Link>

          <Link to="/categories" className="flex gap-2 text-lg font-bold">
            <img className="" src={categories} alt="" />
            {t("menu.categories")}
          </Link>

          <Link to="/orders" className="flex gap-2 text-lg font-bold">
            <img className="" src={orders} alt="" />
            {t("menu.my_orders")}
          </Link>

          <Link to="/offers" className="flex gap-2 text-lg font-bold">
            <DollarSign className="stroke-[#6f5c59]" />
            {t("offers.offers")}
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <img src={kwit} alt="" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>kwit</DropdownMenuItem>
              <DropdownMenuItem>kwit</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}

          {/* <button aria-label="Search">
            <Search className="h-6 w-6" />
          </button> */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-xs text-white">
              {data?.data.cart.length ?? 0}
            </span>
          </Link>
          {!Token && (
            <Link
              to={"/login"}
              className="hidden md:flex"
              aria-label="User account"
            >
              <User className="h-6 w-6" />
            </Link>
          )}
          {Token && (
            <>
              <RhfDialog
                trigger={
                  <Button
                    variant={"ghost"}
                    className="hidden md:flex p-0 hover:bg-transparent w-fit h-fit"
                    aria-label="User account"
                  >
                    <LogOut className="h-6 w-6 rotate-180" />
                  </Button>
                }
                content={
                  <>
                    <p>{t("form.sure")}</p>

                    <div className="w-full flex justify-end">
                      <DialogPrimitive.Close>
                        <Button
                          variant={"outline"}
                          className="text-red-500 w-fit"
                          onClick={() => {
                            localStorage.clear();
                            setToken(false);
                            toast(t("form.logout"));
                          }}
                        >
                          {t("form.continue")}
                        </Button>
                      </DialogPrimitive.Close>
                    </div>
                  </>
                }
              />
            </>
          )}
        </div>
      </div>

      {/* <span className="h-8 max-md:h-4 max-md:text-xs flex items-center text-white">
        عبايات جديدة ومنوعة وجودة عالية
      </span> */}
    </header>
  );
}

export default Header;

// <Link
//   to={"/"}
//   className="hidden md:flex"
//   aria-label="User account"
//   onClick={() => {
//     localStorage.clear();
//     setToken(false);
//   }}
// >
//   <LogOut className="h-6 w-6 rotate-180" />
// </Link>;
// <AlertDialog open>
//   <AlertDialogTrigger>
//     <LogOut className="h-6 w-6 rotate-180" />
//   </AlertDialogTrigger>
//   <AlertDialogContent>
//     <AlertDialogHeader>
//       <AlertDialogTitle>{t("form.sure")}</AlertDialogTitle>
//     </AlertDialogHeader>
//     <AlertDialogFooter>
//       <AlertDialogCancel className="mx-4">
//         {t("form.cancel")}
//       </AlertDialogCancel>
//       <AlertDialogAction
//         onClick={() => {
//           localStorage.clear();
//           setToken(false);
//         }}
//         className="mx-4"
//       >
//         {t("form.continue")}
//       </AlertDialogAction>
//     </AlertDialogFooter>
//   </AlertDialogContent>
// </AlertDialog>
