import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosConfig";
const getProducts = async () => {
    const response = await axios.get(`${base_url}products`);
    console.log(response.data)
    return response.data
}

const createProduct = async (product) => {
    const response = await axios.post(`${base_url}products`, product, config);
  
    return response.data;
  };

  

const productService = {
    getProducts,
    createProduct
}
export default productService;