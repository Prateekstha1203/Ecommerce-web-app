import axios from "axios";
import { base_url } from "../../utils/baseUrl";

export const getAllBrands = async () => {
  const response = await axios.get(`${base_url}brand`);
  console.log(response.data)
  return response.data;
};

const brandService = {
  getAllBrands,
};

export default brandService;
