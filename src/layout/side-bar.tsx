import whatsapp from "@/assets/whatsapp.svg";
import lines from "@/assets/lines-vertical.svg";
import cart from "@/assets/cart.svg";
import my_orders from "@/assets/my-orders.svg";
import kwit from "@/assets/kwit.svg";
import personal_setting from "@/assets/personal-setting.svg";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import home from "@/assets/home.svg";
import categories from "@/assets/categories.svg";
import instagram from "@/assets/instagram.svg";
import { t } from "i18next";

const Sidebar = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <Button className="bg-white p-2 rounded-full shadow-none w-10 h-10">
          <img src={lines} className="w-full" alt="" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="flex flex-col justify-between px-8 py-4 rounded-none">
        <div className="flex flex-col gap-y-8 flex-grow justify-center">
          <Link to={"/"} className="flex gap-2">
            <img
              className="w-6 stroke-secondary fill-secondary"
              src={home}
              alt=""
            />
            {t("menu.main")}
          </Link>

          <Link to={"/categories"} className="flex gap-2">
            <img
              className="w-6 stroke-secondary fill-secondary"
              src={categories}
              alt=""
            />
            {t("menu.categories")}
          </Link>

          <Link to={"/cart"} className="flex gap-2">
            <img
              className="w-6 stroke-secondary fill-secondary"
              src={cart}
              alt=""
            />
            {t("menu.cart")}
          </Link>

          <Link to={"/"} className="flex gap-2">
            <img
              className="w-6 stroke-secondary fill-secondary"
              src={my_orders}
              alt=""
            />
            {t("menu.my_orders")}
          </Link>
        </div>

        <div className="flex flex-col flex-grow items-center justify-center">
          <Link to={"/login"} className="underline text-secondary">
            {t("menu.login")}
          </Link>

          {t("menu.or")}

          <Link to={"/create-account"} className="underline text-secondary">
            {t("menu.create_account")}
          </Link>

          <Link to={"/"} className="hidden flex gap-2 self-start">
            <img
              className="w-6 stroke-secondary fill-secondary"
              src={personal_setting}
              alt=""
            />
            {t("menu.personal_setting")}
          </Link>
        </div>

        <div className="flex flex-col flex-grow justify-end gap-4">
          {t("menu.contact_us")}
          <span className="flex justify-between">
            <img className="w-6" src={instagram} />
            <img className="w-6" src={whatsapp} />
          </span>

          <span className="flex justify-between text-sm">
            <div className="flex flex-col gap-2">
              <p>{t("menu.money")}</p>
              <img className="w-5" src={kwit} />
            </div>

            <div className="flex flex-col gap-2">
              <p>{t("menu.language")}</p>
              العربية
            </div>
          </span>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
