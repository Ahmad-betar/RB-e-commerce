import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { getOffersQuery } from "@/api/offer/offer-query";
import LoadingSpinner from "@/components/ui/loading";
import { t } from "i18next";
import Header from "@/layout/header";

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
          <Card key={offer._id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{offer.description}</span>
                <Badge variant="secondary" className="bg-green-500 text-white">
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
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t("product.product")}</TableHead>
                    <TableHead>{t("product.new_price")}</TableHead>
                    <TableHead>{t("item.notes")}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {offer.products.map((product) => (
                    <TableRow key={product._id}>
                      <TableCell>{product.product}</TableCell>
                      <TableCell>{product.newPrice}</TableCell>
                      <TableCell>{product.notes}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
    </>
  );
};

export default OfferUI;
