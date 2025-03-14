import { productType } from "../product/type";
import { imageType } from "../type";

export interface OfferProduct {
  product: string;
  newPrice: number;
  notes: string;
  _id: string;
}

export interface Offer {
  _id: string;
  description: string;
  products: OfferProduct[];
  expirationDate: string;
  numberOfProductsHaveToBuy: number;
  createdAt: string;
  updatedAt: string;
}

export interface GetOffersResponse {
  success: boolean;
  data: {
    offers: Offer[];
    pagination: {
      page: number;
      limit: number;
    };
  };
}

export interface addOfferPayload {
  products: {
    product: string;
    newPrice: number;
    notes: string;
  }[];
  description: string;
  expirationDate: string;
  numberOfProductsHaveToBuy: number;
}

/////////

interface ProductItem {
  product: productType;
  newPrice: string;
  notes: string;
  _id: string;
}

interface Data {
  _id: string;
  image: imageType;
  description: string;
  products: ProductItem[];
  expirationDate: string;
  numberOfProductsHaveToBuy: number;
  createdAt: string;
  updatedAt: string;
}

export interface getOfferResponse {
  success: boolean;
  data: Data;
}

export interface editOfferPayload {
  products?: {
    product: string;
    newPrice: number;
    notes: string;
  }[];
  action: "add" | "remove";
}
