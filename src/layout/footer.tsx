import whatsapp from "@/assets/whatsapp.svg";
import instagram from "@/assets/instagram.svg";
import ministry from "@/assets/ministry.svg";
import mastercard from "@/assets/master-card.svg";
import f from "@/assets//f.svg";
import knet from "@/assets/k-net.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center gap-2 border-t w-full px-8 mt-10">
      <div>
        <h3 className="mb-4 font-semibold">وسائل التواصل</h3>
        <div className="flex gap-4">
          <Link to={"/"}>
            <img src={whatsapp} className="w-10 max-sm:w-4" alt="" />
          </Link>
          <Link to={"/"}>
            <img src={instagram} className="w-10 max-sm:w-4" alt="" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <img src={ministry} className="max-sm:w-20" />
        <p className="text-center max-sm:text-xs">جميع الحقوق محفوظة</p>
      </div>

      <div>
        <h3 className="mb-4 font-semibold">طرق الدفع</h3>

        <div className="flex gap-2">
          <img className="max-sm:w-8" src={mastercard} />
          <img className="max-sm:w-8" src={f} />
          <img className="max-sm:w-8" src={knet} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
