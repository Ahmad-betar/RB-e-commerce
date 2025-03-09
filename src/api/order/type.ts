export type Order = {
  _id: string;
  totalAmount: number;
  status: string;
  createdAt: string;
  id: string;
};

export interface paginationType {
  totalOrders: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
}

// Type for the "orders" response
export type OrdersResponse = {
  success: boolean;
  pagination: paginationType;
  orders: Order[];
};

// Type for a product in the "oneOrder" response
export type OrderProduct = {
  _id: string;
  title: string;
  quantity: number;
  price: number;
  size: number;
  selectedAttributes: Array<{
    name: string;
    value: string;
  }>;
  notes: string;
};

// Type for the "oneOrder" response
export type OneOrderResponse = {
  success: boolean;
  order: {
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
    products: OrderProduct[];
  };
};
