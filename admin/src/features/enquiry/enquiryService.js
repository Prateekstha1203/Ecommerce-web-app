import axios from "axios";
import { base_url } from "../../utils/baseUrl";

export const getAllEnquiry= async()=>{
    const response = await axios.get(`${base_url}enquiry`)
    return response.data
}

export const enquiryService = {
    getAllEnquiry
}

export default enquiryService;