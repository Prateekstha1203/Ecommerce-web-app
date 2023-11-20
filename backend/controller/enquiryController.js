import Enquiry from "../models/enquiryModel.js";
import expressAsyncHandler from "express-async-handler";
import { validMongodbId } from "../utils/validateMongodbId.js";

export const createEnquiry = expressAsyncHandler(async (req, res) => {
  try {
    const newEnquiry = await Enquiry.create(req.body);
    res.json(newEnquiry);
  } catch (error) {
    throw new Error(error);
  }
});

export const getAllEnquiry = expressAsyncHandler(async (req, res) => {
  try {
    const enquiryList = await Enquiry.find();
    res.json(enquiryList);
  } catch (error) {
    throw new Error(error);
  }
});Enquiry

export const getSingleEnquiry = expressAsyncHandler(async (req, res) => {
  const { EnquiryId } = req.params;
  if (!EnquiryId) throw new Error("No Enquiry Found");
  try {
    const EnquiryList = await Enquiry.findById(EnquiryId);
    res.json(EnquiryList);
  } catch (error) {
    throw new Error(error);
  }
});

export const updateEnquiry = expressAsyncHandler(async (req, res) => {
  const { EnquiryId } = req.params;
  if (!EnquiryId) throw new Error("No Enquiry Found");
  try {
    const EnquiryList = await Enquiry.findByIdAndUpdate(EnquiryId, req.body, {
      new: true,
    });
    res.json(EnquiryList);
  } catch (error) {
    throw new Error(error);
  }
});

export const deleteEnquiry = expressAsyncHandler(async (req, res) => {
  const { EnquiryId } = req.params;
  if (!EnquiryId) throw new Error("No Enquiry Found");
  try {
    const EnquiryList = await Enquiry.findByIdAndDelete(EnquiryId);
    res.json(EnquiryList);
  } catch (error) {
    throw new Error(error);
  }
});
