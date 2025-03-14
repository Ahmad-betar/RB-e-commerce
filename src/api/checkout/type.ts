export interface checkoutPayload {
  deliveryAddress: {
    state: string;
    governorate: string;
    city: string;
    notes: string;
  };
  couponCode: string;
  isUrgent: boolean;
}

export interface checkoutResponse {
  success: boolean;
  totalProductPrice: number;
  productsDisount: number;
  discount: number;
  discountType: string;
  deliveryCost: number;
  totalAmount: number;
  paymentDetails: {
    IsSuccess: boolean;
    Message: string;
    ValidationErrors: null;
    Data: {
      PaymentMethods: {
        PaymentMethodId: number;
        PaymentMethodAr: string;
        PaymentMethodEn: string;
        PaymentMethodCode: string;
        IsDirectPayment: boolean;
        ServiceCharge: number;
        TotalAmount: number;
        CurrencyIso: string;
        ImageUrl: string;
        IsEmbeddedSupported: boolean;
        PaymentCurrencyIso: string;
      }[];
    };
  };
  customerId: string;
  deliveryAddress: {
    state: string;
    governorate: string;
    city: string;
    notes: string;
  };
  couponCode: string;
}
