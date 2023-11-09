import axios from "axios";
import { base_url } from "../../utils/baseUrl";

export const getAllBlogs = async () => {
  const response = await axios.get(`${base_url}blog`);
  console.log(response.data.allBlogs)
  return response.data.allBlogs;
};

const blogService = {
  getAllBlogs,
};

export default blogService;
