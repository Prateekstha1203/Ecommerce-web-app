import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import {config} from "../../utils/axiosConfig";

export const getAllCategories = async () => {
  const response = await axios.get(`${base_url}category`);

  return response.data;
};

export const createdCategory = async (category) => {
  const response = await axios.post(`${base_url}category`, category, config);
  console.log(response.data);
  return response.data;
}

const categoryService = {
  getAllCategories,
  createdCategory,
};
export default categoryService;
