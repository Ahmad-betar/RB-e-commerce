import { useOneOrderQuery } from "@/api/order/order-query";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "@/layout/header";
import { t } from "i18next";

const Order = () => {
  const { id } = useParams();
  const { data } = useOneOrderQuery(id!);

  return (
    <div>
      <Header />

      <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
        {/* Order Summary */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">{t("order.order_id")}</p>
              <p className="font-semibold">{data?.order.orderId}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">{t("order.order_status")}</p>
              <p className="font-semibold">
                {t(`order.status.${data?.order.status}`)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">{t("order.order_date")}</p>
              <p className="font-semibold">
                {new Date(data?.order.orderDate!).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                {t("order.payment_status")}
              </p>
              <p className="font-semibold">
                {data?.order.isPaid ? t("form.paid") : t("form.not_paid")}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">{t("order.total_price")}</p>
              <p className="font-semibold">
                ${data?.order.finalCost.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                {t("order.deliviry_price")}
              </p>
              <p className="font-semibold">
                ${data?.order.deliveryCost.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Delivery Address */}
        {/* <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{t("create_account.address")}</h3>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p>{data?.order?.deliveryAddress.area}</p>
            <p>{data?.order?.deliveryAddress.street}</p>
            <p>
              {t("create_account.building")} {data?.order.deliveryAddress.building.number}, {t("create_account.floor")}{" "}
              {data?.order.deliveryAddress.building.floor}, {t("create_account.apartment")}{" "}
              {data?.order.deliveryAddress.building.apartment}
            </p>
            {data?.order.deliveryAddress.notes && (
              <p className="text-sm text-gray-500 mt-2">
                {t("create_account.another_details")}: {data?.order.deliveryAddress.notes}
              </p>
            )}
          </div>
        </div> */}

        {/* Products List */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{t("item.details")}</h3>
          <div className="space-y-4">
            {data?.order.products.map((product) => (
              <div
                key={product._id}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">{product.title}</p>
                    <p className="text-sm text-gray-500">
                      {t("item.count")}: {product.quantity}
                    </p>
                    <p className="text-sm text-gray-500">
                      {t("form.deliviry_price")}: ${product.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {t("item.size")}: {product.size}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      {t("form.total")}: $
                      {(product.quantity * product.price).toFixed(2)}
                    </p>
                  </div>
                </div>
                {/* Selected Attributes */}
                <div className="mt-2">
                  {product.selectedAttributes.map((attr, index) => (
                    <p key={index} className="text-sm text-gray-500">
                      {attr.name}: {attr.value}
                    </p>
                  ))}
                </div>
                {/* Product Notes */}
                {product.notes && (
                  <p className="text-sm text-gray-500 mt-2">
                    {t("item.notes")}: {product.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Order Notes */}
        {data?.order.orderNotes && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{t("item.notes")}</h3>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-500">{data?.order.orderNotes}</p>
            </div>
          </div>
        )}

        {/* Payment URL */}
        {data?.order.paymentUrl && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{t("form.payment")}</h3>
            <a
              href={data?.order.paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {t("form.payment.proceed")}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
