import React from "react";

// Define the type for a product
type Product = {
  _id: string;
  title: string;
  quantity: number;
  price: number;
  size: number;
  selectedAttributes: Array<{ name: string; value: string }>;
  notes: string;
};

// Define the type for the order
type Order = {
  orderId: string;
  status: string;
  isPaid: boolean;
  orderDate: string;
  finalCost: number;
  deliveryCost: number;
  paymentUrl: string;
  coupon: string | null;
  orderNotes: string;
  deliveryAddress: {
    area: string;
    street: string;
    building: {
      number: string;
      floor: string;
      apartment: string;
    };
    notes: string;
  };
  products: Product[];
};

// Define the type for the order response
type OrderResponse = {
  success: boolean;
  order: Order;
};

// Props for the OrderDetails component
interface OrderDetailsProps {
  data: OrderResponse;
}

const OrderDetails = ({ data }: { data: OrderDetailsProps }) => {
  const order = data.data.order;
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
      {/* Order Summary */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Order Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Order ID</p>
            <p className="font-semibold">{order.orderId}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Status</p>
            <p className="font-semibold">{order.status}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Order Date</p>
            <p className="font-semibold">
              {new Date(order.orderDate).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Payment Status</p>
            <p className="font-semibold">
              {order.isPaid ? "Paid" : "Not Paid"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Final Cost</p>
            <p className="font-semibold">${order.finalCost.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Delivery Cost</p>
            <p className="font-semibold">${order.deliveryCost.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Delivery Address */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Delivery Address</h3>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p>{order.deliveryAddress.area}</p>
          <p>{order.deliveryAddress.street}</p>
          <p>
            Building {order.deliveryAddress.building.number}, Floor{" "}
            {order.deliveryAddress.building.floor}, Apartment{" "}
            {order.deliveryAddress.building.apartment}
          </p>
          {order.deliveryAddress.notes && (
            <p className="text-sm text-gray-500 mt-2">
              Notes: {order.deliveryAddress.notes}
            </p>
          )}
        </div>
      </div>

      {/* Products List */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Products</h3>
        <div className="space-y-4">
          {order.products.map((product) => (
            <div
              key={product._id}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">{product.title}</p>
                  <p className="text-sm text-gray-500">
                    Quantity: {product.quantity}
                  </p>
                  <p className="text-sm text-gray-500">
                    Price: ${product.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">Size: {product.size}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    Total: ${(product.quantity * product.price).toFixed(2)}
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
                  Notes: {product.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Order Notes */}
      {order.orderNotes && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Order Notes</h3>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-sm text-gray-500">{order.orderNotes}</p>
          </div>
        </div>
      )}

      {/* Payment URL */}
      {order.paymentUrl && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Payment</h3>
          <a
            href={order.paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Proceed to Payment
          </a>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
