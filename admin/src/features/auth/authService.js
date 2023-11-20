import axios from "axios";
import { base_url } from "../../utils/baseUrl";

import {config} from "../../utils/axiosConfig"

const login = async (userData) => {
  const response = await axios.post(`${base_url}user/admin-login`, userData);
  console.log("Response data", response.data);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//Orders
const getOrders = async () => {
  const response = await axios.get(`${base_url}user/order/getallorders`,config);
console.log(response.data)
  return response.data;
};

const authService = {
  login,
  getOrders,
};

export default authService;
