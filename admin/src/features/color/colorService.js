import axios from "axios";
import { base_url } from "../../utils/baseUrl";

export const getAllColor = async () => {
  const response = await axios.get(`${base_url}color`);
  console.log(response.data)
  return response.data;
};

const colorService = {
  getAllColor,
};

export default colorService;
