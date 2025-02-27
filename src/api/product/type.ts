export interface productType {
  _id: string;
  name: string;
  parentProductType: { _id: string; name: string } | undefined;
}

export interface productDetails {
  _id: string;
  title: string;
  description: string;
  price: number;
  logoUrl: string;
  imagesUrls: string[];
  productType: productType;
  weight: number;
  createdAt: Date;
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
