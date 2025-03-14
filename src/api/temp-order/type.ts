import { productType } from "../product/type";
import { imageType } from "../type";

export interface getTempOrderResponse {
  success: true;
  order: {
    _id: string;
    customerPhone: string;
    products: {
      product: {
        _id: string;
        title: string;
        images: imageType;
        productType: productType;
      };
      //   selectedAttributes: {
      //     color: "blue";
      //     "نوع القماش": "مخمل";
      //   };
      price: number;
      size: number;
      quantity: number;
      notes: string;
      _id: string;
    }[];
    adminNotes: string;
    creator: {
      _id: string;
      name: string;
      email: string;
      phone: string;
    };
    isUrgent: boolean;
    customerUrl: string;
    createdAt: string;
    updatedAt: string;
    totalPrice: number;
    itemCount: number;
  };
}

export interface addProductToTempOrder {
  tempOrderId: string;
  deliveryAddress: {
    state: string;
    governorate: string;
    city: string;
    notes : string
  };
  notes: string;
  couponCode: string;
  paymentMethodId: number;
}
