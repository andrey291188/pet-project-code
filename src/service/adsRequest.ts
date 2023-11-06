import axios from "axios";
import { BASE_URL } from "./baseValues";

axios.defaults.baseURL = BASE_URL;

type Ads = {
  title: string;
  price: number | null;
  description: string;
};

// No need token
export async function getAllAds() {
  const { data } = await axios.get("api/ads");
  return data;
}

export async function getAdsforPagination(page: number | string) {
  const { data } = await axios.get(`api/ads?page=${page}&limit=12`);
  return data
}

export async function getAdsforQuery(page: number | string, query: string) {
  const { data } = await axios.get(`api/ads?q=${query}&page=${page}&limit=12`);
  return data
}

// Need token

export async function getAllAdsUser() {
  const { data } = await axios.get(`api/ads/allForUser`);
  return data;
}

export async function getAllAdsUserById(id: string) {
  const { data } = await axios.get(`api/ads/allForUser/${id}`);
  return data;
}

export async function getAdsById(id: string) {
  return await axios.get(`api/ads/${id}`);
}

export async function createAdsUser(body: Ads) {
  const response = await axios.post("api/ads", body);
  return response.data;
}

export async function addFotoAds(id: string, body: FormData) {
  await axios.patch(`api/ads/${id}/fotoAds`, body);
}

export async function updateAdsUser(id: string, body: Ads) {
  const response = await axios.put(`api/ads/${id}`, body);
  return response.data;
}

export async function deleteAds(id: string) {
  return await axios.delete(`api/ads/${id}`);
}

export async function resetViewsAds(id: string) {
  await axios.patch(`api/ads/reset-views/${id}`);
}

export async function reversActiveAds(id: string) {
  await axios.patch(`api/ads/active/${id}`);
}