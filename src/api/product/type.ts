import { imageType, NameID, Personal_info, videoType } from "../type";

export interface productType {
  _id: string;
  name: string;
  parentProductType: NameID | undefined;
}

export interface attributesType {
  name: string;
  options: string[];
  required: boolean;
}

export interface ProductData {
  _id: string;
  title: string;
  description: string;
  price: number;
  availableSizes: string[];
  logo: imageType;
  images: imageType[];
  videos: videoType[];
  productType: productType;
  creator: Personal_info;
  lastEditor: Personal_info;
  attributes: attributesType[];
  notes: string;
  createdAt: string;
}

export interface getOneProductResponse {
  success: boolean;
  data: ProductData;

  productTypeDetails: {
    productType: productType;
    parentProductType: string;
  };
}
export interface productDetails {
  _id: string;
  title: string;
  description: string;
  price: number;
  availableSizes: string[];
  logo: imageType;
  images: imageType[];
  videos: videoType[];
  productType: productType;
  weight: number;
  createdAt: string;
}

export interface getProductType {
  success: boolean;
  count: number;
  totalCount: number;
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  data: productDetails[];
}

export interface getProductParams {
  search?: string;
  page?: number;
  sort?: string;
  limit?: number;
  minPrice?: number;
  maxPrice?: number;
  sizes?: number;
  productType?: string;
}

export interface getBestSeller {
  success: boolean;
  numberOfEntities: number;
  bestSellers: {
    totalQuantity: number;
    productId: string;
    name: string;
    price: number;
    image: imageType;
  }[];
}
