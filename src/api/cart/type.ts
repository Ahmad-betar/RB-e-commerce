import { productType } from "../product/type";

export interface getCartType {
  success: boolean;
  data: {
    cart: {
      product: {
        _id: string;
        title: string;
        price: number;
        productType: productType;
      };
      size: number;
      quantity: number;
      notes: string;
      _id: string;
    }[];
  };
}

export interface deleteFromCart {
  itemId: string;
}

export interface addToCart {
  productId: string;
  size: number;
  quantity: number;
  notes: string;
}

export interface changeItemQuantity {
  itemId: string;
  quantityChange: number;
}
