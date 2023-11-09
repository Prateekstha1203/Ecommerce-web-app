import axios from "axios";
import { base_url } from "../../utils/baseUrl";

export const getAllCategories = async () => {
  const response = await axios.get(`${base_url}category`);
  console.log(response.data);
  return response.data;
};

const categoryService = {
  getAllCategories,
};
export default categoryService;
