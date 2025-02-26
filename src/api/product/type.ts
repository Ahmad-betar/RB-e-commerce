export interface ProductType {
  _id: string;
  title: string;
  description: string;
  price: number;
  logoUrl: string;
  imagesUrls: string[];
  productType: {
    _id: string;
    name: string;
    parentProductType: {
      _id: string;
      name: string;
    };
  };
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
  data: ProductType[];
}
