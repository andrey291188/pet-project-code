import axios from "axios";
import { BASE_URL } from "./baseValues";

axios.defaults.baseURL = BASE_URL;

//  For Admin

export async function getAllSales() {
  const { data } = await axios.get("api/sales");
  return data;
}

//  For Users

export async function getBuyById(id: string) {
  return await axios.get(`api/sales/buy/${id}`);
}

export async function getAllBuyer() {
  const { data } = await axios.get("api/sales/buyer");
  return data;
}

export async function getAllSeller() {
  const { data } = await axios.get("api/sales/seller");
  return data;
}
