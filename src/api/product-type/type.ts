import { imageType } from "../type";

export interface ProductTypeResponse {
  message: string;
  productTypes: {
    image: imageType;
    _id: string;
    name: string;
  }[];
}
