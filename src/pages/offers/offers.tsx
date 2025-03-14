import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getOffersQuery } from "@/api/offer/offer-query";
import LoadingSpinner from "@/components/ui/loading";
import { t } from "i18next";
import Header from "@/layout/header";
import { Link } from "react-router-dom";

const OfferUI = () => {
  const { data, isLoading } = getOffersQuery();

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Header />

      <h1 className="text-2xl font-bold my-6 px-4">{t("offers.available")}</h1>

      {/* Offers List */}
      <div className="space-y-4 px-4">
        {data?.data.offers.map((offer) => (
          <Link to={"/offer/" + offer._id}>
            <Card key={offer._id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{offer.description}</span>
                  <Badge
                    variant="secondary"
                    className="bg-green-500 text-white"
                  >
                    {t("offers.until")}
                    {new Date(offer.expirationDate).toLocaleDateString()}
                  </Badge>
                </CardTitle>

                <CardDescription>
                  {t("offers.buy_get", {
                    number: offer.numberOfProductsHaveToBuy,
                  })}
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default OfferUI;
