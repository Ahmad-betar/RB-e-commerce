import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Footer from "@/layout/footer";
import Header from "@/layout/header";
import paymentcard from "@/assets/payment-card.svg";
import { t } from "i18next";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import card from "@/assets/master-card.svg";
import f from "@/assets/f.svg";
import knet from "@/assets/k-net.svg";

const InvoicePayment = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />

      <div className="flex-grow flex items-center">
        <Card className="md:w-1/4 mx-auto h-fit">
          <CardHeader className="flex-row gap-5 font-bold py-2 px-5 items-center border-b border-b-gray-300">
            <img className="w-5 h-5" src={paymentcard} alt="" />
            {t("form.payment_type")}
          </CardHeader>

          <CardContent className="p-5">
            <RadioGroup
              className="flex flex-col gap-8"
              defaultValue="comfortable"
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem value="default" id="r1" />
                <img className="w-5 h-5" src={card} alt="" />
                <Label className="font-medium" htmlFor="r1">
                  Knet by Myfatoorah
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="comfortable" id="r2" />
                <img className="w-5 h-5" src={f} alt="" />
                <Label className="font-medium" htmlFor="r2">
                  Master card - VISA by Myfatoorah{" "}
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="compact" id="r3" />
                <img className="w-5 h-5" src={knet} alt="" />
                <Label className="font-medium" htmlFor="r3">
                  دول الخليج - Myfatoorah
                </Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default InvoicePayment;
