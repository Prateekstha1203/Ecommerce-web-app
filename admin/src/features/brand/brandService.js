import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

export const getAllBrands = async () => {
  const response = await axios.get(`${base_url}brand`);

  return response.data;
};

export const createBrands = async (brand) => {
  const response = await axios.post(`${base_url}brand`, brand, config);
  console.log(response.data);
  return response.data;
}
const brandService = {
  getAllBrands,
  createBrands,
};

export default brandService;
