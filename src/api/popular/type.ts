import { imageType } from "../type";

export interface getPopularResponse {
  populars: {
    _id: string;
    product: {
      _id: string;
      title: string;
      price: number;
      images: imageType[];
    };
    orderNumber: number;
  }[];
}

export interface addPopularPayload {
  product: string;
  orderNumber: number;
}
