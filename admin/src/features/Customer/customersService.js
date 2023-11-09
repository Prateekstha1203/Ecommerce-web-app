

import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getUsers = async () => {
  const response = await axios.get(`${base_url}user/allUser`);
  console.log(response)
  return response.data;
};

const customersServices = {
  getUsers,
};

export default customersServices;