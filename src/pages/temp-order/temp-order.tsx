import { tempOrderQuery } from "@/api/temp-order/temp-order-query";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Header from "@/layout/header";
import { t } from "i18next";

const TempOrder = () => {
  const { id } = useParams();
  const { data } = tempOrderQuery(id!);

  console.log(data);

  return (
    <>
      <Header />

      <div className="p-6 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>{data?.order._id}</CardTitle>
                <CardDescription>
                  {new Date(data?.order.createdAt!).toLocaleString()}
                </CardDescription>
              </div>
              {/* <Badge variant={data?.order.isUrgent ? "destructive" : "default"}>
                {data?.order.isUrgent ? "Urgent" : "Normal"}
              </Badge> */}
            </div>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t("temp_order.customer_phone")}
                  </p>
                  <p className="font-medium">{data?.order.customerPhone}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t("form.total")}
                  </p>
                  <p className="font-medium">{data?.order.totalPrice}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  {t("temp_order.products")}
                </p>
                <Table className="">
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t("form.price")}</TableHead>
                      <TableHead>{t("item.size")}</TableHead>
                      <TableHead>{t("form.quantity")}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data?.order.products.map((product, index) => (
                      <TableRow key={index}>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.size}</TableCell>
                        <TableCell>{product.quantity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-end">
            <Button asChild>
              <a
                href={data?.order.customerUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Complete Order Process
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default TempOrder;
