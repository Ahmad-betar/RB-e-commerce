import { productType } from "../product/type";
import { imageType } from "../type";

export interface getCartType {
  success: boolean;
  data: {
    cart: {
      product: {
        _id: string;
        title: string;
        images: imageType[];
        productType: productType;
      };
      selectedAttributes: SelectedAttributes;
      price: number;
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

type SelectedAttributes = {
  [key: string]: string | number;
};

export interface addToCart {
  productId: string;
  size: number;
  quantity: number;
  notes: string;
  selectedAttributes: SelectedAttributes;
}

export interface changeItemQuantity {
  itemId: string;
  quantityChange: number;
}
