import axios from "axios";
import { base_url } from "../../utils/baseUrl";

export const getAllBlogsCategory= async()=>{
    const response = await axios.get(`${base_url}blogCategory`)
    return response.data
}
export const blogCategoryService = {
    getAllBlogsCategory
}

export default blogCategoryService;