import Header from "@/layout/header";
import { useOrdersQuery } from "@/api/order/order-query";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { t } from "i18next";
import { useState } from "react";
import RHFPagination from "@/components/rhf-pagination";
import { Link } from "react-router-dom";

const Orders = () => {
  const [page, setpage] = useState<number>(1);
  const { data } = useOrdersQuery({ page });

  return (
    <>
      <Header />

      <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4">{t("menu.my_orders")}</h2>

        {/* Order List */}
        <div className="space-y-4">
          {data?.orders?.map(({ _id, createdAt, status, totalAmount }) => (
            <Link to={_id}>
              <Card className="my-2">
                <CardContent className="pt-6">
                  <div className="flex justify-between">
                    <h6 className="font-sans text-sm">{_id}</h6>
                    <Badge variant={"outline"}>{status}</Badge>
                  </div>
                  <h6 className="font-sans text-sm my-1">
                    {t("form.total")} : {totalAmount}
                  </h6>
                  <h6 className="font-sans text-sm">
                    {new Date(createdAt).toLocaleDateString()}
                  </h6>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <RHFPagination
          hasNextPage={data?.pagination.hasNextPage!}
          page={page}
          totalPages={Math.ceil(data?.pagination.totalOrders! / 10)}
          onPageChange={(page) => {
            setpage(page);
          }}
          hasPreviousPage={page !== 1}
        />
      </div>
    </>
  );
};

export default Orders;
