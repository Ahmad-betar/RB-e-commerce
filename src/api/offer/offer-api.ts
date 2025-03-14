import { API_ROUTES } from "../api-routes";
import { axiosInstance } from "../axios";
import { GetOffersResponse, addOfferPayload, getOfferResponse } from "./type";

// Get all offers
export const get_offers = async (params?: {
  page?: number;
  limit?: number;
}) => {
  const { data } = await axiosInstance.get<GetOffersResponse>(
    API_ROUTES.offer.get,
    { params }
  );
  return data;
};

// Get a single offer by ID
export const get_offer = async (id: string) => {
  const { data } = await axiosInstance.get<getOfferResponse>(
    API_ROUTES.offer.getOne + id
  );
  return data;
};

// Add a new offer
export const add_offer = async (payload: addOfferPayload) => {
  const { data } = await axiosInstance.post(API_ROUTES.offer.add, payload);
  return data;
};
