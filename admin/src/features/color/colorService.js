import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";

export const getAllColor = async () => {
  const response = await axios.get(`${base_url}color`);
  console.log(response)
  return response.data;
};

export const createColor = async (color) => {
  const response = await axios.post(`${base_url}color`, color, config);
  console.log(response.data);
  return response.data;
}


const colorService = {
  getAllColor,
  createColor
};

export default colorService;
